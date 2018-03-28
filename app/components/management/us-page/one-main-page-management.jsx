import React from 'react';

class OneMainPageManagement extends React.Component{
  constructor() {
    super();
    this.state = {
      keywords: [],
      photo: ""
    }
  }
  componentWillMount() {
    // TODO: 获取两个人的keywords
    // TODO: 获取首页两人的photo
    Request.Keywords.getUsInfo(this.props.user).then(resp => {
      if (resp.ok) {
        this.setState({
          keywords: resp.data.words,
          keywordsEdit: false,
        })
      }
    })
  }
  componentDidMount() {

  }
  editKeywords() {
    this.setState({
      keywordsEdit: true
    })
  }
  saveKeywords() {
    this.setState({
      keywordsEdit: false
    })
  }
  handleKeywordChange() {
    let keywords = Utils.copy(this.state.keywords),
      index = event.target.name;
    keywords[index] = event.target.value
    this.setState({
      keywords
    })
  }
  addNewKeyword() {
    let keywords = Utils.copy(this.state.keywords)
    keywords.push("")
    this.setState({keywords})
  }
  render() {
    const keywordsEdit = () => {
      return (
        <div className="keyword-list">
          {
            this.state.keywords.map((k, i) => (
              <input type="text" value={k} key={i} onChange={this.handleKeywordChange.bind(this)} name={i} />
            ))
          }
          <div className="add-keyword" onClick={this.addNewKeyword.bind(this)}>
            <i className="icon-plus"></i>
          </div>
        </div>
      )
    }
    return (
      <div className="one-main-page-management">
        {this.props.user}
        <div className="photo-manage">
          photo
        </div>
        <div className="keyword-manage">
          <div className="title">
            Keywords
          </div>
          {
            this.state.keywordsEdit ? 
            keywordsEdit()
            :
            <div className="keyword-list">
              {
                this.state.keywords.map((k, i) => (
                  <span className="" key={i}>{k}</span>
                ))
              }
            </div>
          }
          <div className="operation">
            {
              this.state.keywordsEdit ? 
                (<button onClick={this.saveKeywords.bind(this)}>保存</button>)
              :
                (<button onClick={this.editKeywords.bind(this)}>编辑</button>)
            }
          </div>
        </div>
      </div>
    )
  }
};

module.exports = {OneMainPageManagement}
