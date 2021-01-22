import React from "react";

import CellCountComponent from '../components/Metrics/CellCount'
import SexRepartitionComponent from '../components/Metrics/SexRepartion'
import DevStageComponent from '../components/Metrics/DevStage'
import MainGraphComponent from '../components/Metrics/MainGraph'

import { MDBRow, MDBContainer, MDBCol } from "mdbreact";


const KeysToComponentMap = {
    CellCountComponent: CellCountComponent,
    SexRepartitionComponent: SexRepartitionComponent,
    DevStageComponent: DevStageComponent,
    MainGraphComponent: MainGraphComponent,
    MDBRow: MDBRow,
    MDBContainer: MDBContainer,
    MDBCol: MDBCol
};

function renderer(config,objid) {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        key: config.key,
        objid: objid,
        src: config.src,
        data: config.data,
        title: config.title
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map(c => renderer(c,objid)))
    );
  }
}

export default renderer;