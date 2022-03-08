/*!

=========================================================
* SciLicium Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import Plot from 'react-plotly.js';

class PlotComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], layout: {}, frames: [], config: {responsive: true}};
    }
    
    componentDidMount() {
      this.setState({
        data:this.props.data,
        layout:this.props.layout,
        frames:this.props.frames,
        config:this.props.config})
    }

    componentWillReceiveProps(nextProps) {
      if( nextProps.data !== this.props.data || nextProps.layout !== this.state.layout){
        this.setState({data:nextProps.data})
        this.setState({layout:nextProps.layout})
        this.setState({frames:nextProps.frames})
        this.setState({config:nextProps.config})
      }
    }
  render() {
    return (
      <Plot
        style={{width: "100%", height: "100%"}}
        data={this.state.data}
        layout={this.state.layout}
        frames={this.state.frames}
        config={this.state.config}
        onInitialized={(figure) => this.setState(figure)}
        onUpdate={(figure) => this.setState(figure)}
        useResizeHandler={true}
      />
    );
  }
}

export default PlotComponent;