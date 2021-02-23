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
import { withRouter } from "react-router-dom";

import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { CardContent, CardHeader, Card} from '@material-ui/core';

import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

import PlotComponent from "../components/Plots/PlotComponent"
import {Spinner} from '../components/Loading/LoadingComponent'

import axios from "axios";
import { toastOnError } from "../utils/Utils";
import { trackPromise } from 'react-promise-tracker';

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          loading:true,
          study:{},
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(id){
        await trackPromise(
          axios.get("/api/v1/data/count?id=" + id)
          .then(response => {
              console.log(response)
            this.setState(
                {
                    name : response.data.name,
                    // data : response.data.chart.data, 
                    // layout: response.data.layout,
                    // frames: response.data.frames,
                    // config: response.data.config,
                    // title: response.data.title,
                    loading:false
                });            
          })
          .catch(error => {
            toastOnError("Error loading study");
          })
        )
      }

    async componentDidMount() {
      this.getData(this.props.match.params.did)
    }
  

  render() {
      const chart={
        "data": [{
            "hole": 0.7,
            "labels": ["XX Early progenitors", "Pre-granulosa", "XY Early progenitors", "XY Interstitial progenitors", "XX Stromal progenitors", "Sertoli", "Granulosa", "Pre-Sertoli", "Foetal Leydig cells", "Endothelial"],
            "textinfo": "percent",
            "textposition": "inside",
            "type": "pie",
            "values": [240, 190, 183, 106, 90, 70, 43, 31, 7, 3]
        }],
        "layout": {
            "template": {
                "data": {
                    "bar": [{
                        "error_x": {
                            "color": "#2a3f5f"
                        },
                        "error_y": {
                            "color": "#2a3f5f"
                        },
                        "marker": {
                            "line": {
                                "color": "#E5ECF6",
                                "width": 0.5
                            }
                        },
                        "type": "bar"
                    }],
                    "barpolar": [{
                        "marker": {
                            "line": {
                                "color": "#E5ECF6",
                                "width": 0.5
                            }
                        },
                        "type": "barpolar"
                    }],
                    "carpet": [{
                        "aaxis": {
                            "endlinecolor": "#2a3f5f",
                            "gridcolor": "white",
                            "linecolor": "white",
                            "minorgridcolor": "white",
                            "startlinecolor": "#2a3f5f"
                        },
                        "baxis": {
                            "endlinecolor": "#2a3f5f",
                            "gridcolor": "white",
                            "linecolor": "white",
                            "minorgridcolor": "white",
                            "startlinecolor": "#2a3f5f"
                        },
                        "type": "carpet"
                    }],
                    "choropleth": [{
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "type": "choropleth"
                    }],
                    "contour": [{
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]
                        ],
                        "type": "contour"
                    }],
                    "contourcarpet": [{
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "type": "contourcarpet"
                    }],
                    "heatmap": [{
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]
                        ],
                        "type": "heatmap"
                    }],
                    "heatmapgl": [{
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]
                        ],
                        "type": "heatmapgl"
                    }],
                    "histogram": [{
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "histogram"
                    }],
                    "histogram2d": [{
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]
                        ],
                        "type": "histogram2d"
                    }],
                    "histogram2dcontour": [{
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]
                        ],
                        "type": "histogram2dcontour"
                    }],
                    "mesh3d": [{
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "type": "mesh3d"
                    }],
                    "parcoords": [{
                        "line": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "parcoords"
                    }],
                    "pie": [{
                        "automargin": true,
                        "type": "pie"
                    }],
                    "scatter": [{
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "scatter"
                    }],
                    "scatter3d": [{
                        "line": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "scatter3d"
                    }],
                    "scattercarpet": [{
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "scattercarpet"
                    }],
                    "scattergeo": [{
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "scattergeo"
                    }],
                    "scattergl": [{
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "scattergl"
                    }],
                    "scattermapbox": [{
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "scattermapbox"
                    }],
                    "scatterpolar": [{
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "scatterpolar"
                    }],
                    "scatterpolargl": [{
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "scatterpolargl"
                    }],
                    "scatterternary": [{
                        "marker": {
                            "colorbar": {
                                "outlinewidth": 0,
                                "ticks": ""
                            }
                        },
                        "type": "scatterternary"
                    }],
                    "surface": [{
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        },
                        "colorscale": [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]
                        ],
                        "type": "surface"
                    }],
                    "table": [{
                        "cells": {
                            "fill": {
                                "color": "#EBF0F8"
                            },
                            "line": {
                                "color": "white"
                            }
                        },
                        "header": {
                            "fill": {
                                "color": "#C8D4E3"
                            },
                            "line": {
                                "color": "white"
                            }
                        },
                        "type": "table"
                    }]
                },
                "layout": {
                    "annotationdefaults": {
                        "arrowcolor": "#2a3f5f",
                        "arrowhead": 0,
                        "arrowwidth": 1
                    },
                    "autotypenumbers": "strict",
                    "coloraxis": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "colorscale": {
                        "diverging": [
                            [0, "#8e0152"],
                            [0.1, "#c51b7d"],
                            [0.2, "#de77ae"],
                            [0.3, "#f1b6da"],
                            [0.4, "#fde0ef"],
                            [0.5, "#f7f7f7"],
                            [0.6, "#e6f5d0"],
                            [0.7, "#b8e186"],
                            [0.8, "#7fbc41"],
                            [0.9, "#4d9221"],
                            [1, "#276419"]
                        ],
                        "sequential": [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]
                        ],
                        "sequentialminus": [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"]
                        ]
                    },
                    "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                    "font": {
                        "color": "#2a3f5f"
                    },
                    "geo": {
                        "bgcolor": "white",
                        "lakecolor": "white",
                        "landcolor": "#E5ECF6",
                        "showlakes": true,
                        "showland": true,
                        "subunitcolor": "white"
                    },
                    "hoverlabel": {
                        "align": "left"
                    },
                    "hovermode": "closest",
                    "mapbox": {
                        "style": "light"
                    },
                    "paper_bgcolor": "white",
                    "plot_bgcolor": "#E5ECF6",
                    "polar": {
                        "angularaxis": {
                            "gridcolor": "white",
                            "linecolor": "white",
                            "ticks": ""
                        },
                        "bgcolor": "#E5ECF6",
                        "radialaxis": {
                            "gridcolor": "white",
                            "linecolor": "white",
                            "ticks": ""
                        }
                    },
                    "scene": {
                        "xaxis": {
                            "backgroundcolor": "#E5ECF6",
                            "gridcolor": "white",
                            "gridwidth": 2,
                            "linecolor": "white",
                            "showbackground": true,
                            "ticks": "",
                            "zerolinecolor": "white"
                        },
                        "yaxis": {
                            "backgroundcolor": "#E5ECF6",
                            "gridcolor": "white",
                            "gridwidth": 2,
                            "linecolor": "white",
                            "showbackground": true,
                            "ticks": "",
                            "zerolinecolor": "white"
                        },
                        "zaxis": {
                            "backgroundcolor": "#E5ECF6",
                            "gridcolor": "white",
                            "gridwidth": 2,
                            "linecolor": "white",
                            "showbackground": true,
                            "ticks": "",
                            "zerolinecolor": "white"
                        }
                    },
                    "shapedefaults": {
                        "line": {
                            "color": "#2a3f5f"
                        }
                    },
                    "ternary": {
                        "aaxis": {
                            "gridcolor": "white",
                            "linecolor": "white",
                            "ticks": ""
                        },
                        "baxis": {
                            "gridcolor": "white",
                            "linecolor": "white",
                            "ticks": ""
                        },
                        "bgcolor": "#E5ECF6",
                        "caxis": {
                            "gridcolor": "white",
                            "linecolor": "white",
                            "ticks": ""
                        }
                    },
                    "title": {
                        "x": 0.05
                    },
                    "xaxis": {
                        "automargin": true,
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": "",
                        "title": {
                            "standoff": 15
                        },
                        "zerolinecolor": "white",
                        "zerolinewidth": 2
                    },
                    "yaxis": {
                        "automargin": true,
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": "",
                        "title": {
                            "standoff": 15
                        },
                        "zerolinecolor": "white",
                        "zerolinewidth": 2
                    }
                }
            }
        }
    }
    return (
          <MDBContainer className="mt-5">         
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardHeader title={<Breadcrumbs/>}>
                            
                        </CardHeader>
                        <CardContent>
                        {this.state.loading ? <Spinner/> : <h2>{this.state.name}</h2>}
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardContent>
                            {this.state.loading ? <Spinner/> : <PlotComponent data={chart.data} layout={chart.layout}/>}
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardHeader title="Datasets"></CardHeader>
                        <CardContent>
                           
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
    );
  }
}

export default withRouter(ResultsPage);