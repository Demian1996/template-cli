// 全局声明svg component定义
declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const content: SvgrComponent;
  export default content;
}
declare module '*.less' {
  const content: any;
  export default content;
}
