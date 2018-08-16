import React from 'react';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/draggable';

export class AbsoluteWindow extends React.Component {

  componentDidMount() {
    this.$node = $(this.refs.draggable);
    this.$node.draggable({ scroll: true });
  }

  componentWillUnmount() {
    this.$node.draggable('destroy');
  }

  render() {

    return (<div ref = "draggable" className="AbsoluteWindow" >
      <table style={{
        "borderCollapse":"collapse",
        "font":"0",
        "border":"0",
        "margin":"0",
        "padding":"0",
        "backgroundColor":"transparent",
        "overflow":"hidden",
        "textDecoration":"none",
        "verticalAlign":"middle",
        "tableLayout":"auto",
        "width":"100px",
        "height":"10px"}}>
        <tbody>
          <tr>
            <td style={{backgroundColor:'#ffcccc'}}>
              {this.props.children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>);
  }
}

export default AbsoluteWindow;
