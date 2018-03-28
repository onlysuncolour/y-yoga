import React from 'react';

class YoungAnimateKeywordsManagement extends React.Component{
  constructor() {
    super();
    this.state = {
      keywordList: []
    }
  }
  componentWillMount() {
    Request.Keywords.getYoungCircle().then(resp => {
      if (resp.ok) {
        this.setState({
          keywordList: resp.data,
        })
      }
    })
  }
  componentDidMount() {

  }
  saveLine(lineIndex) {
    let keywordList = Utils.copy(this.state.keywordList)
    keywordList[lineIndex].mode = 'read'
    this.setState({ keywordList });
  }
  setLineEdit(lineIndex) {
    let keywordList = Utils.copy(this.state.keywordList)
    keywordList[lineIndex].mode = 'edit'
    this.setState({ keywordList });
  }
  addNewKeyword(lineIndex) {
    let keywordList = Utils.copy(this.state.keywordList)
    keywordList[lineIndex].words.push("")
    this.setState({ keywordList });
  }
  handleKeywordChange(event) {
    let keywordList = Utils.copy(this.state.keywordList),
    [lineIndex, keyIndex] = event.target.name.split('_');
    keywordList[lineIndex].words[keyIndex] = event.target.value
    this.setState({ keywordList });
  }
  handleListNameChange(event) {
    let keywordList = Utils.copy(this.state.keywordList),
    lineIndex = event.target.name;
    keywordList[lineIndex].name = event.target.value
    this.setState({ keywordList });
  }
  removeWord(lineIndex, keyIndex) {
    let keywordList = Utils.copy(this.state.keywordList)
    keywordList[lineIndex].words.splice(keyIndex, 1)
    this.setState({ keywordList });
  }
  render() {
    return (
      <div className="young-animate-keywords-management">
        keyword lists
        <div>
          <table border="1" bordercolor="#a0c6e5" rules="rows">
            <thead>
              <tr>
                <th>name</th>
                <th>keywords</th>
                <th>operation</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.keywordList.map((l, iOl) => {
                  return (
                    <tr className="keyword-list" key={iOl}>
                      {
                        l.mode == 'edit' ?
                        ( <td><input className="list-name-edit" name={iOl} value={l.name} onChange={this.handleListNameChange.bind(this)} /></td> )
                          :
                        ( <td><span className="list-name">{l.name}</span></td> )
                      }
                      {
                        l.mode == 'edit' ?
                        (
                          <td>
                            {
                              l.words.map((k, iOk) => {
                                return (
                                  <div key={iOk} className="keyword-edit">
                                    <input name={`${iOl}_${iOk}`} value={k} onChange={this.handleKeywordChange.bind(this)} />
                                    <i className="icon-cross" onClick={this.removeWord.bind(this, iOl, iOk)}></i>
                                  </div>
                                )
                              })
                            }
                            <div className="add-keyword" onClick={this.addNewKeyword.bind(this, iOl)}>
                              <i className="icon-plus"></i>
                            </div>
                          </td>
                        )
                          :
                        (
                          <td>
                            {
                              l.words.map((k, iOk) => {
                                return (
                                  <span className="keyword-span" key={iOk}>{k}</span>
                                )
                              })
                            }
                          </td>
                        )
                      }
                      {
                        l.mode == 'edit' ?
                        ( <td><button className="keyword-button" onClick={this.saveLine.bind(this, iOl)}>保存</button></td> )
                          :
                        ( <td><button className="keyword-button" onClick={this.setLineEdit.bind(this, iOl)}>编辑</button></td> )
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
};

module.exports = {YoungAnimateKeywordsManagement}
