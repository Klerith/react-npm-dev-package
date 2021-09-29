// declare module "*.module.css"
// declare module "*.module.css" {
//     const value: any;
//     export default value;
// }
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}