class PhotoEdit extends React.Component{
  constructor() {
    super();
    this.state = {
      info: {
        name: '',
        url: '',
        desc: '',
        createdAt: '',
        updatedAt: '',
        tag: [''],
      }
    }

  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="photo-edit-page">
        <div className="form">
          <input type="text" placeholder="啦啦啦"/>
        </div>
      </div>
    )
  }
}