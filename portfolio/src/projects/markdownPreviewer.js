export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `This is an example of Markdown
==============
Function 1
-----------
[link to Google](http://google.com)

`+"`code is awesome`"+`

![Northern Lights](https://www.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-landscape-407021107);

>May the force be with you

>Yoda

1. **List Item 1**
2. List Item 2

`+`
    function code() {
    console.log('Hello World')
    }`
   
    , 
      parsed: `This is an example of Markdown
==============
Function 1
-----------
[link to Google](http://google.com)

`+"`code is awesome`"+`

![Northern Lights](https://www.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-landscape-407021107);

>May the force be with you

>Yoda

1. **List Item 1**
2. List Item 2

`+`
    function code() {
    console.log('Hello World')
    }`
   
    ,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value, 
      parsed: event.target.value,
    });
  }
  
  
  render() {
    return(
      <section style={{textAlign: 'center'}}>
        <h1>HTML Markdown Previewer!</h1>
        <div id="input-box">
          <textarea id='editor' value={this.state.value} onChange={this.handleChange} style={{width: '60%', height: '50vh'}} />
        </div>
        <div id="container" style={{display: 'inline-block', width: '60%', height: '50vh'}}>
          <MarkdownExample ht={this.state.parsed} />
        </div>
      </section>
    )
  }
};
          
class MarkdownExample extends React.Component {
  constructor(props) {
    super(props)
  }
  getMarkdownText() {
    var rawMarkup = marked(this.props.ht, {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return <div style={{backgroundColor: 'lightgrey', textAlign: 'left'}} id='preview' dangerouslySetInnerHTML={this.getMarkdownText()} />
  }
}
