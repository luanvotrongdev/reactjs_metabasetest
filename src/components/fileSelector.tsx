import React, { 
  FormEvent } from "react";

interface FileSelectorState
{
  value : string;
}

export default class FileSelector extends React.Component<FileSelectorState, FileSelectorState>
{
    constructor(props : FileSelectorState) {
        super(props);
        this.state = {
          value: 'Please write an essay about your favorite DOM element.'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event: any) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event : FormEvent) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Essay:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}