// This source code is a part of Cloud Simulator.
// Copyright (C) 2022. rollrat. Licensed under the MIT License.

import EventLoop from "../../../runner/EventLoop";
import { CSMessage } from "../../Message";
import ICSNode from "../../Node";

export default class CSConsumeNode implements ICSNode {
  processMessage(runner: EventLoop, msg: CSMessage): void {
    throw new Error("Method not implemented.");
  }
}
