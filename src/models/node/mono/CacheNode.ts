// This source code is a part of Cloud Simulator.
// Copyright (C) 2022. rollrat. Licensed under the MIT License.

import EventLoop from "../../../runner/EventLoop";
import { CSMessage } from "../../Message";
import ICSNode from "../../Node";

/**
 * 단일 캐시 노드
 */
export default class CSCacheNode implements ICSNode {
  /**
   *
   * @param id 노드 Id
   * @param size 최대 저장할 수 있는 데이터의 수
   * @param latency 데이터를 읽고, 쓸 때 발생하는 지연 시간
   * @param bandwidth 단위 시간 동안 처리할 수 있는 메시지의 수
   */
  constructor(
    public readonly id: number,
    public readonly size: number,
    public readonly latency: number,
    public readonly bandwidth: number
  ) {}

  processMessage(runner: EventLoop, msg: CSMessage): void {
    throw new Error("Method not implemented.");
  }
}
