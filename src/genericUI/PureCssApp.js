import React from 'react';
import dictionary from './japaneseWord';

// function transfer(text) {
//   let kana;
//   if ( text === undefined || text === "") {
//     kana = "";
//   } else {
//     kana = text.split("")
//       .map(value => dictionary.reduce((ret, cur) => cur[2] === value || cur[1] === value ? cur[1] : ret, ""))
//       .join("");
//   }
//   return kana;
// }
function transKana(text, tempText = "") {
  let kana = dictionary.find(item => item[2] === text);
  if (kana) {
    return [kana[1], ""];
  } else {
    let [lastChar, lastChar2] = text.split("").reverse();
    if(lastChar === lastChar2) {
      return ["ッ", lastChar2];
    }
    let [first, ...remaining] = text.split("");
    tempText = tempText + first;
    return remaining.length === 0 ? ["", tempText] : transKana(remaining.join(""), tempText);
  }
}

class PureCssApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tempValue: '',
      value:'',
    }
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onKeyUp (e) {
    if (e.target.value === "") {
      this.setState({value: ""});
      return;
    }

    if(e.keyCode === 8) {
      if(this.state.tempValue !== "") {
        let [last, ...remaining] = this.state.tempValue.split("").reverse();
        this.setState({tempValue: remaining.reverse().join("")});
      } else {
        let [last, ...remaining] = this.refs.kana.value.split("").reverse();
        this.setState({value: remaining.reverse().join("")});
      }
      return;
    }

    if (e.keyCode < 65 || e.keyCode > 127) return;

    let char = String.fromCharCode(e.keyCode).toLowerCase();
    let tempValue = this.state.tempValue + char;

    let [kana,newTempValue] = transKana(tempValue);

    this.setState({
      tempValue: newTempValue,
      value: this.state.value + kana
    });
  }

  render() {
    return (
      <form className="pure-form">
        <fieldset>
            <input type="text" placeholder="kanji" ref="kanji" onKeyUp={this.onKeyUp} />
            <input type="text" placeholder="kana" ref="kana" value = {this.state.value} onChange = {e => this.setState({value: e.target.value})} />

            <label htmlFor="remember">
                <input id="remember" type="checkbox" /> Remember me
            </label>

            <button type="submit" className="pure-button pure-button-primary">Sign in</button>
        </fieldset>
      </form>
    )
  }
}


export default PureCssApp;
