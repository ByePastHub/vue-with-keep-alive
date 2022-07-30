import Vue, { App, NavigationFailure } from 'vue'
import VueRouter, { Router, Route } from 'vue-router'

export type DestroyName = string | Array<string>
export declare function destroy(name: DestroyName): void
export declare function withRouter(router: VueRouter): void

export interface $KeepRouter {
  destroy(name: DestroyName): void
}

export type Dictionary<T> = { [key: string]: T }

export interface KeepLocation {
  destroy?: DestroyName
  name?: string
  path?: string
  hash?: string
  query?: Dictionary<string | (string | null)[] | null | undefined>
  params?: Dictionary<string>
  append?: boolean
  replace?: boolean
}

type ErrorHandler = (err: Error) => void

export interface OverloadRouter {
  reLaunch(location: KeepLocation): Promise<Route>
  reLaunch(location: KeepLocation): Promise<NavigationFailure | void | undefined>
  reLaunch(location: KeepLocation): void
}

export interface KeepRouter extends OverloadRouter, Router, VueRouter {
  push(location: KeepLocation): Promise<Route>
  push(location: KeepLocation): Promise<NavigationFailure | void | undefined>
  push(location: KeepLocation): void
  push(
    location: KeepLocation,
    onComplete?: Function,
    onAbort?: ErrorHandler
  ): void
  replace(location: KeepLocation): Promise<Route>
  replace(location: KeepLocation): Promise<NavigationFailure | void | undefined>
  replace(location: KeepLocation): void
  replace(
    location: KeepLocation,
    onComplete?: Function,
    onAbort?: ErrorHandler
  ): void
}

export declare type MatchPattern = string | RegExp | (string | RegExp)[];

export type Mode = 'allKeepAlive' | 'customizeKeepAlive'
export declare interface KeepAliveProps {
  exclude?: MatchPattern
  max?: number | string
  mode?: Mode
  matchClearList?: Array<string>
  matchClearBehindList?: Array<string>
}

export declare interface Ref<T = any> {
  value: T;
  [RefSymbol]: true;
}

declare const RefSymbol: unique symbol;
declare type VNodeRef = string | Ref | ((ref: object | null, refs: Record<string, any>) => void);

export declare type VNodeProps = {
  key?: string | number | symbol;
  ref?: VNodeRef;
  ref_for?: boolean;
  ref_key?: string;
};

export declare const KeepRouterView: {
  new (): {
    $props: VNodeProps & KeepAliveProps;
  };
};

export declare const Vue: Vue | App

declare namespace Keep {
  function install(app: typeof Vue | App, router: Router): void
}

export default Keep