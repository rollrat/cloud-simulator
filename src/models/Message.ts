// This source code is a part of Cloud Simulator.
// Copyright (C) 2022. rollrat. Licensed under the MIT License.

import { ICSEventable } from "./Event";

export interface ICSMessagable {}

/**
 * 어떤 노드에서 다른 노드로 요청을 보내는 메시지 이벤트
 */
export class CSMessage implements ICSEventable {
  constructor(
    public readonly from: number,
    public readonly to: number,
    public readonly msg: ICSMessagable
  ) {}
}
