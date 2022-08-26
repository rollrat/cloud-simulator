// This source code is a part of Cloud Simulator.
// Copyright (C) 2022. rollrat. Licensed under the MIT License.

export interface ICSEventable {}

/**
 * EventLoop에서 처리될 수 있는 작업의 가장 작은 단위
 */
export class CSEvent {
  constructor(public readonly eve: ICSEventable) {}
}
