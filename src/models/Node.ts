// This source code is a part of Cloud Simulator.
// Copyright (C) 2022. rollrat. Licensed under the MIT License.

import CSEventLoopRunner from "../runner/EventLoop";
import { CSMessage } from "./Message";

/**
 * 노드의 현재 상태를 저장함
 */
export class CSNodeInfo {
  isReady: boolean = false;
  isBusy: boolean = false;
  isStopped: boolean = false;
}

export default interface ICSNode {
  id: number;
  processMessage(runner: CSEventLoopRunner, msg: CSMessage): void;
}
