import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Bugs from './Bugs';


const AdminDashboard = () => {

return (
<div>
{/* <div className="adminDash">
    <button variant="primary">Primary</button> 
    </div> */}
    <div className="sidebar">
        <h6 className="display-5 text-dark">Dashboard</h6>
        <Link className="nav-link display-5 text-light" to="/bugs">Bugs</Link>
        <Link className="nav-link display-5 text-light" to="/home">Staff</Link>
        <Link className="nav-link display-5 text-light" to="/home">Project</Link>
        <Link className="nav-link display-5 text-light" to="/home">Report</Link>
        <Link className="nav-link display-5 text-light" to="/home">Message</Link>

    </div>
    

    </div>
)
}
export default AdminDashboard;

// import React from "react";

// const AdminDashboard = () => (
//   <svg width={1920} height={1080} viewBox="0 0 1920 1080">
//     <defs>
//       <style>
//         {
//           ".a,.ad,.ae,.af,.ag,.ah,.ai,.at,.h,.k,.p,.r,.w{fill:#fff;}.b{clip-path:url(#m);}.c{fill:#ebeff3;}.d{fill:#1a3146;}.ay,.e,.f,.u{fill:#102334;}.e{opacity:0;}.g{fill:#cccc72;}.as,.h,.u{font-size:18px;}.ab,.aj,.ar,.as,.h,.m,.n,.q,.s,.u{font-family:Roboto-Regular, Roboto;}.i{fill:#f1f1f3;}.j{fill:#f6f9fc;}.k{stroke:#a3a6b4;}.l,.m,.t{fill:#a3a6b4;}.m,.n,.q,.s,.t{font-size:14px;}.n,.o{fill:#858585;}.o{font-size:12px;font-family:Roboto-Light, Roboto;font-weight:300;}.p{stroke:#1e78c7;}.q{fill:#1e78c7;}.r{stroke:#0f9f82;}.s{fill:#0f9f82;}.aa,.t,.y{font-family:Roboto-Bold, Roboto;font-weight:700;}.v{fill:#364d61;}.w{font-size:16px;}.ay,.w{font-family:Roboto-Medium, Roboto;font-weight:500;}.x{fill:url(#e);}.y,.z{fill:#ff4141;}.y{font-size:19px;}.aa,.aj,.as{fill:#4d4f5c;}.aa{font-size:34px;}.ab{fill:#43425d;font-size:22px;opacity:0.5;}.ac{fill:url(#h);}.ad{stroke:#ff8474;}.ad,.ae,.af,.ag,.ah,.ai{stroke-width:3px;}.ae{stroke:#81c9ff;}.af{stroke:#ff7cc3;}.ag{stroke:#ffa167;}.ah{stroke:#50d8bb;}.ai{stroke:#a3a1fb;}.aj,.ar{font-size:13px;}.ak{fill:#f0f0f7;fill-rule:evenodd;}.al{fill:#a3a1fb;}.am{fill:#5ee2a0;}.an{fill:#ffa177;}.ao{fill:#54d8ff;}.ap{fill:#ff8474;}.aq{fill:#ff7cc3;}.ar{fill:#3b86ff;}.at{stroke:#dbdbdb;}.au{fill:#c4c4c4;}.av{fill:#848484;}.aw,.az,.bb{fill:none;}.aw{stroke:#e5e5e5;}.ax{clip-path:url(#k);}.ay{font-size:20px;}.az{stroke:#cccc72;stroke-width:2px;}.ba{stroke:none;}.bc{filter:url(#i);}.bd{filter:url(#f);}.be{filter:url(#c);}.bf{filter:url(#a);}"
//         }
//       </style>
//       <filter
//         id="a"
//         x={295}
//         y={379}
//         width={1610}
//         height={686}
//         filterUnits="userSpaceOnUse"
//       >
//         <feOffset input="SourceAlpha" />
//         <feGaussianBlur stdDeviation={5} result="b" />
//         <feFlood floodOpacity={0.051} />
//         <feComposite operator="in" in2="b" />
//         <feComposite in="SourceGraphic" />
//       </filter>
//       <filter
//         id="c"
//         x={301}
//         y={93}
//         width={448}
//         height={282}
//         filterUnits="userSpaceOnUse"
//       >
//         <feOffset dy={2} input="SourceAlpha" />
//         <feGaussianBlur stdDeviation={3} result="d" />
//         <feFlood floodOpacity={0.039} />
//         <feComposite operator="in" in2="d" />
//         <feComposite in="SourceGraphic" />
//       </filter>
//       <linearGradient
//         id="e"
//         x1={0.5}
//         x2={0.5}
//         y2={1}
//         gradientUnits="objectBoundingBox"
//       >
//         <stop offset={0} stopColor="#55d8fe" />
//         <stop offset={1} stopColor="#54d8ff" stopOpacity={0.502} />
//       </linearGradient>
//       <filter
//         id="f"
//         x={761}
//         y={93}
//         width={448}
//         height={282}
//         filterUnits="userSpaceOnUse"
//       >
//         <feOffset dy={2} input="SourceAlpha" />
//         <feGaussianBlur stdDeviation={3} result="g" />
//         <feFlood floodOpacity={0.039} />
//         <feComposite operator="in" in2="g" />
//         <feComposite in="SourceGraphic" />
//       </filter>
//       <linearGradient
//         id="h"
//         x1={0.5}
//         x2={0.5}
//         y2={1}
//         gradientUnits="objectBoundingBox"
//       >
//         <stop offset={0} stopColor="#45c9ae" />
//         <stop offset={1} stopColor="#45c9ae" stopOpacity={0.502} />
//       </linearGradient>
//       <filter
//         id="i"
//         x={1221}
//         y={93}
//         width={678}
//         height={282}
//         filterUnits="userSpaceOnUse"
//       >
//         <feOffset dy={2} input="SourceAlpha" />
//         <feGaussianBlur stdDeviation={3} result="j" />
//         <feFlood floodOpacity={0.039} />
//         <feComposite operator="in" in2="j" />
//         <feComposite in="SourceGraphic" />
//       </filter>
//       <clipPath id="k">
//         <rect className="a" width={20} height={22.857} />
//       </clipPath>
//       <clipPath id="m">
//         <rect width={1920} height={1080} />
//       </clipPath>
//     </defs>
//     <g id="l" className="b">
//       <rect className="a" width={1920} height={1080} />
//       <rect
//         className="c"
//         width={1640}
//         height={1080}
//         transform="translate(280)"
//       />
//       <rect className="d" width={280} height={1080} />
//       <rect className="e" width={280} height={86} />
//       <rect
//         className="f"
//         width={280}
//         height={54}
//         transform="translate(0 188)"
//       />
//       <rect
//         className="e"
//         width={280}
//         height={54}
//         transform="translate(0 188)"
//       />
//       <rect
//         className="e"
//         width={280}
//         height={54}
//         transform="translate(0 116)"
//         OnClick=""
//       />
//       <rect
//         className="e"
//         width={280}
//         height={54}
//         transform="translate(0 259)"
//       />
//       <rect
//         className="e"
//         width={280}
//         height={54}
//         transform="translate(0 331)"
//       />
//       <g transform="translate(-199.831 -227.225)">
//         <g transform="translate(250.831 245.225)">
//           <path
//             className="a"
//             d="M270.586,282.225l21.459,30.919,7.176-10.334L284.81,282.225Z"
//             transform="translate(-258.361 -263.144)"
//           />
//           <path
//             className="a"
//             d="M312.979,282.225l-6.693,9.685,7.132,10.058,13.764-19.743Z"
//             transform="translate(-271.968 -263.144)"
//           />
//           <path
//             className="a"
//             d="M309.442,270.758H265.153l-7.01-9.927,58.453-.154Z"
//             transform="translate(-253.618 -252.708)"
//           />
//           <path
//             className="g"
//             d="M273.666,245.225l5.258,7.22H307.68l5.258-7.22Z"
//             transform="translate(-259.535 -245.225)"
//           />
//           <path
//             className="g"
//             d="M270.727,311.442l5.55-8-14.32-20.555-11.126.008Z"
//             transform="translate(-250.831 -263.465)"
//           />
//           <path
//             className="g"
//             d="M324.271,311.292l-5.474-7.855,14.347-20.54,10.924-.01Z"
//             transform="translate(-276.736 -263.465)"
//           />
//         </g>
//         <g transform="translate(328.426 260.225)">
//           <path
//             className="a"
//             d="M387.031,283l-7.506,18.963h-6.141L366.391,283h6.653L377,295.737,380.947,283Z"
//             transform="translate(-366.391 -282.574)"
//           />
//           <path
//             className="a"
//             d="M413.245,299.516q-2.588-2.474-2.587-7.421,0-4.832,2.516-7.378a9.491,9.491,0,0,1,7.065-2.544,9.7,9.7,0,0,1,6.994,2.474q2.587,2.473,2.587,7.42,0,4.834-2.516,7.378a9.49,9.49,0,0,1-7.065,2.544A9.7,9.7,0,0,1,413.245,299.516Zm9.737-3.312a6.966,6.966,0,0,0,.953-4.165,6.766,6.766,0,0,0-.953-4.108,3.69,3.69,0,0,0-5.487.028,6.968,6.968,0,0,0-.953,4.165,6.765,6.765,0,0,0,.953,4.108,3.689,3.689,0,0,0,5.487-.028Z"
//             transform="translate(-387.829 -282.173)"
//           />
//           <path
//             className="a"
//             d="M454.926,283h8.33q4.947,0,7.264,2.374t2.317,7.121q0,4.72-2.331,7.093t-7.25,2.374h-8.33Zm7.619,14.7a4.226,4.226,0,0,0,3.312-1.279,5.725,5.725,0,0,0,1.151-3.923q0-5.231-4.463-5.231h-1.933V297.7Z"
//             transform="translate(-409.268 -282.574)"
//           />
//           <path
//             className="a"
//             d="M497.319,283h5.715v18.963h-5.715Z"
//             transform="translate(-429.798 -282.574)"
//           />
//           <path
//             className="a"
//             d="M534.467,283v18.963h-3.98l-7.762-9.695v9.695h-5.174V283h4.605l7.136,9.326V283Z"
//             transform="translate(-439.597 -282.574)"
//           />
//         </g>
//       </g>
//       <text className="h" transform="translate(96 292)">
//         <tspan x={0} y={0}>
//           {"Pessoas"}
//         </tspan>
//       </text>
//       <text className="h" transform="translate(96 364)">
//         <tspan x={0} y={0}>
//           {"Agenda"}
//         </tspan>
//       </text>
//       <text className="h" transform="translate(96 221)">
//         <tspan x={0} y={0}>
//           {"Pastas"}
//         </tspan>
//       </text>
//       <text className="h" transform="translate(96 149)">
//         <tspan x={0} y={0}>
//         <Link className="nav-link display-5 text-light" to="/about">Bugs</Link>
//         </tspan>
//       </text>
//       <g transform="translate(36 141)">
//         <path
//           className="a"
//           d="M29.828,75.88l-3.772,6.466A3.333,3.333,0,0,1,23.177,84H2.345a1.25,1.25,0,0,1-1.08-1.88l3.772-6.466A3.333,3.333,0,0,1,7.917,74H28.748A1.25,1.25,0,0,1,29.828,75.88ZM7.917,72.333H25v-2.5a2.5,2.5,0,0,0-2.5-2.5H14.167L10.833,64H2.5A2.5,2.5,0,0,0,0,66.5V80.982l3.6-6.168A5.017,5.017,0,0,1,7.917,72.333Z"
//         />
//       </g>
//       <g transform="translate(36 243)">
//         <path
//           className="a"
//           d="M4.5,41a3,3,0,1,0-3-3A3,3,0,0,0,4.5,41Zm21,0a3,3,0,1,0-3-3A3,3,0,0,0,25.5,41ZM27,42.5H24a2.991,2.991,0,0,0-2.114.872,6.857,6.857,0,0,1,3.52,5.128H28.5A1.5,1.5,0,0,0,30,47V45.5A3,3,0,0,0,27,42.5Zm-12,0a5.25,5.25,0,1,0-5.25-5.25A5.247,5.247,0,0,0,15,42.5ZM18.6,44h-.389a7.248,7.248,0,0,1-6.422,0H11.4A5.4,5.4,0,0,0,6,49.4v1.35A2.251,2.251,0,0,0,8.25,53h13.5A2.251,2.251,0,0,0,24,50.75V49.4A5.4,5.4,0,0,0,18.6,44ZM8.114,43.372A2.991,2.991,0,0,0,6,42.5H3a3,3,0,0,0-3,3V47a1.5,1.5,0,0,0,1.5,1.5H4.589a6.874,6.874,0,0,1,3.525-5.128Z"
//         />
//       </g>
//       <g transform="translate(0 70)">
//         <text className="h" transform="translate(96 369)">
//           <tspan x={0} y={0}>
//             {"Configura\xE7\xF5es"}
//           </tspan>
//         </text>
//         <g transform="translate(17.356 338.901)">
//           <path
//             className="a"
//             d="M48.261,27.534,45.569,25.98a12.17,12.17,0,0,0,0-4.435l2.692-1.554a.764.764,0,0,0,.347-.885,15.736,15.736,0,0,0-3.456-5.977.76.76,0,0,0-.935-.145l-2.692,1.554a11.924,11.924,0,0,0-3.841-2.218v-3.1a.757.757,0,0,0-.594-.739,15.883,15.883,0,0,0-6.9,0,.757.757,0,0,0-.594.739v3.109a12.3,12.3,0,0,0-3.841,2.218L23.07,12.989a.751.751,0,0,0-.935.145,15.641,15.641,0,0,0-3.456,5.977.756.756,0,0,0,.347.885l2.692,1.554a12.17,12.17,0,0,0,0,4.435L19.027,27.54a.764.764,0,0,0-.347.885A15.736,15.736,0,0,0,22.135,34.4a.76.76,0,0,0,.935.145l2.692-1.554A11.924,11.924,0,0,0,29.6,35.21v3.109a.757.757,0,0,0,.594.739,15.883,15.883,0,0,0,6.9,0,.757.757,0,0,0,.594-.739V35.21a12.3,12.3,0,0,0,3.841-2.218l2.692,1.554a.751.751,0,0,0,.935-.145,15.641,15.641,0,0,0,3.456-5.977A.78.78,0,0,0,48.261,27.534ZM33.64,28.816a5.055,5.055,0,1,1,5.055-5.055A5.061,5.061,0,0,1,33.64,28.816Z"
//           />
//         </g>
//       </g>
//       <g transform="translate(36.015 98.95)">
//         <path
//           className="a"
//           d="M14.587,38.1l-9.6,7.908v8.535a.833.833,0,0,0,.833.833l5.836-.015a.833.833,0,0,0,.829-.833V49.546a.833.833,0,0,1,.833-.833H16.65a.833.833,0,0,1,.833.833v4.981a.833.833,0,0,0,.833.836l5.834.016a.833.833,0,0,0,.833-.833V46l-9.6-7.9a.635.635,0,0,0-.8,0Zm15.167,5.375L25.4,39.888V32.675a.625.625,0,0,0-.625-.625H21.859a.625.625,0,0,0-.625.625v3.781L16.571,32.62a2.5,2.5,0,0,0-3.177,0L.212,43.477a.625.625,0,0,0-.083.88l1.328,1.614a.625.625,0,0,0,.881.085l12.25-10.09a.635.635,0,0,1,.8,0l12.251,10.09a.625.625,0,0,0,.88-.083l1.328-1.614a.625.625,0,0,0-.089-.882Z"
//           transform="translate(0)"
//         />
//       </g>
//       <g transform="translate(38 343)">
//         <path
//           className="a"
//           d="M0,27.188A2.813,2.813,0,0,0,2.813,30H23.438a2.813,2.813,0,0,0,2.813-2.812V11.25H0ZM18.75,15.7a.705.705,0,0,1,.7-.7H21.8a.705.705,0,0,1,.7.7v2.344a.705.705,0,0,1-.7.7H19.453a.705.705,0,0,1-.7-.7Zm0,7.5a.705.705,0,0,1,.7-.7H21.8a.705.705,0,0,1,.7.7v2.344a.705.705,0,0,1-.7.7H19.453a.705.705,0,0,1-.7-.7Zm-7.5-7.5a.705.705,0,0,1,.7-.7H14.3a.705.705,0,0,1,.7.7v2.344a.705.705,0,0,1-.7.7H11.953a.705.705,0,0,1-.7-.7Zm0,7.5a.705.705,0,0,1,.7-.7H14.3a.705.705,0,0,1,.7.7v2.344a.705.705,0,0,1-.7.7H11.953a.705.705,0,0,1-.7-.7Zm-7.5-7.5a.705.705,0,0,1,.7-.7H6.8a.705.705,0,0,1,.7.7v2.344a.705.705,0,0,1-.7.7H4.453a.705.705,0,0,1-.7-.7Zm0,7.5a.705.705,0,0,1,.7-.7H6.8a.705.705,0,0,1,.7.7v2.344a.705.705,0,0,1-.7.7H4.453a.705.705,0,0,1-.7-.7ZM23.438,3.75H20.625V.938A.94.94,0,0,0,19.688,0H17.812a.94.94,0,0,0-.937.938V3.75h-7.5V.938A.94.94,0,0,0,8.438,0H6.563a.94.94,0,0,0-.937.938V3.75H2.813A2.813,2.813,0,0,0,0,6.563V9.375H26.25V6.563A2.813,2.813,0,0,0,23.438,3.75Z"
//         />
//       </g>
//       <rect
//         className="g"
//         width={8}
//         height={54}
//         transform="translate(272 188)"
//       />
//       <g transform="translate(-625 -228)">
//         <g className="bf" transform="matrix(1, 0, 0, 1, 625, 228)">
//           <rect
//             className="a"
//             width={1580}
//             height={656}
//             rx={6}
//             transform="translate(310 394)"
//           />
//         </g>
//         <g transform="translate(955 720)">
//           <g transform="translate(0 45)">
//             <rect
//               className="i"
//               width={1540}
//               height={1}
//               transform="translate(0 64)"
//             />
//             <rect className="j" width={1540} height={64} />
//             <g transform="translate(0 -65)">
//               <g transform="translate(-286 -536)">
//                 <g className="k" transform="translate(1591 625)">
//                   <rect className="ba" width={95} height={30} rx={6} />
//                   <rect
//                     className="bb"
//                     x={0.5}
//                     y={0.5}
//                     width={94}
//                     height={29}
//                     rx={5.5}
//                   />
//                 </g>
//                 <g transform="translate(-91 18)">
//                   <g transform="translate(1699.011 613.993)">
//                     <path
//                       className="l"
//                       d="M8.507,2.739l3.75,3.75L4.113,14.633.77,15a.7.7,0,0,1-.776-.777L.366,10.88,8.507,2.739Zm6.07-.558L12.816.419a1.407,1.407,0,0,0-1.989,0L9.17,2.076l3.75,3.75L14.577,4.17A1.407,1.407,0,0,0,14.577,2.18Z"
//                       transform="translate(0)"
//                     />
//                   </g>
//                   <text className="m" transform="translate(1760 627)">
//                     <tspan x={-36.046} y={0}>
//                       {"Editar"}
//                     </tspan>
//                   </text>
//                 </g>
//               </g>
//               <g transform="translate(-176 -536)">
//                 <g className="k" transform="translate(1591 625)">
//                   <rect className="ba" width={95} height={30} rx={6} />
//                   <rect
//                     className="bb"
//                     x={0.5}
//                     y={0.5}
//                     width={94}
//                     height={29}
//                     rx={5.5}
//                   />
//                 </g>
//                 <g transform="translate(-90.9 18)">
//                   <text className="m" transform="translate(1760 627)">
//                     <tspan x={-41.337} y={0}>
//                       {"Excluir"}
//                     </tspan>
//                   </text>
//                   <g transform="translate(1696.5 611)">
//                     <path
//                       className="l"
//                       d="M.937,13.594A1.406,1.406,0,0,0,2.344,15h8.437a1.406,1.406,0,0,0,1.406-1.406V3.75H.937Zm7.969-7.5a.469.469,0,1,1,.937,0v6.562a.469.469,0,1,1-.937,0Zm-2.812,0a.469.469,0,0,1,.938,0v6.562a.469.469,0,1,1-.937,0Zm-2.812,0a.469.469,0,1,1,.937,0v6.562a.469.469,0,1,1-.937,0ZM12.656.937H9.141L8.865.389A.7.7,0,0,0,8.235,0H4.887a.7.7,0,0,0-.627.39L3.984.937H.469A.469.469,0,0,0,0,1.406v.937a.469.469,0,0,0,.469.469H12.656a.469.469,0,0,0,.469-.469V1.406A.469.469,0,0,0,12.656.937Z"
//                       transform="translate(1.4 4)"
//                     />
//                   </g>
//                 </g>
//               </g>
//             </g>
//             <rect className="a" width={1540} height={64} />
//             <text className="n" transform="translate(1135 37)">
//               <tspan x={-76.781} y={0}>
//                 {"Tom Chavez"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(490 37)">
//               <tspan x={0} y={0}>
//                 {"TJE - PE"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(615 37)">
//               <tspan x={0} y={0}>
//                 {"05/10/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(813 37)">
//               <tspan x={0} y={0}>
//                 {"05/10/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(35 37)">
//               <tspan x={0} y={0}>
//                 {"PROC - 005"}
//               </tspan>
//             </text>
//             <g transform="translate(0 3)">
//               <text className="n" transform="translate(165 24)">
//                 <tspan x={0} y={0}>
//                   {"Kevin Elliot X Randy Nelson"}
//                 </tspan>
//               </text>
//               <text className="o" transform="translate(165 44)">
//                 <tspan x={0} y={0}>
//                   {"0026545-45.5400.2.45.0025"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-6 3)">
//               <g className="p" transform="translate(1229 16)">
//                 <rect className="ba" width={95} height={30} rx={6} />
//                 <rect
//                   className="bb"
//                   x={0.5}
//                   y={0.5}
//                   width={94}
//                   height={29}
//                   rx={5.5}
//                 />
//               </g>
//               <text className="q" transform="translate(1308 36)">
//                 <tspan x={-61.599} y={0}>
//                   {"Indefinido"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-927 -758)">
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2359 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2371 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2383 787)"
//               />
//             </g>
//           </g>
//           <g transform="translate(0 110)">
//             <rect
//               className="i"
//               width={1540}
//               height={1}
//               transform="translate(0 64)"
//             />
//             <rect className="a" width={1540} height={64} />
//             <text className="n" transform="translate(1118 37)">
//               <tspan x={-57.682} y={0}>
//                 {"Alex Reid"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(490 37)">
//               <tspan x={0} y={0}>
//                 {"TJE - PE"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(615 37)">
//               <tspan x={0} y={0}>
//                 {"28/10/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(813 37)">
//               <tspan x={0} y={0}>
//                 {"28/10/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(35 37)">
//               <tspan x={0} y={0}>
//                 {"PROC - 006"}
//               </tspan>
//             </text>
//             <g transform="translate(0 -2)">
//               <text className="n" transform="translate(165 29)">
//                 <tspan x={0} y={0}>
//                   {"Mary Ann Palmer X Laurel McDonald"}
//                 </tspan>
//               </text>
//               <text className="o" transform="translate(165 49)">
//                 <tspan x={0} y={0}>
//                   {"0026545-45.5400.2.45.0025"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-6 3)">
//               <g className="p" transform="translate(1229 16)">
//                 <rect className="ba" width={95} height={30} rx={6} />
//                 <rect
//                   className="bb"
//                   x={0.5}
//                   y={0.5}
//                   width={94}
//                   height={29}
//                   rx={5.5}
//                 />
//               </g>
//               <text className="q" transform="translate(1308 36)">
//                 <tspan x={-61.599} y={0}>
//                   {"Indefinido"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-927 -758)">
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2359 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2371 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2383 787)"
//               />
//             </g>
//           </g>
//           <g transform="translate(0 175)">
//             <rect
//               className="i"
//               width={1540}
//               height={1}
//               transform="translate(0 64)"
//             />
//             <rect className="a" width={1540} height={64} />
//             <text className="n" transform="translate(1144 37)">
//               <tspan x={-84.991} y={0}>
//                 {"Kathryn Wells"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(490 37)">
//               <tspan x={0} y={0}>
//                 {"TJE - RJ"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(615 37)">
//               <tspan x={0} y={0}>
//                 {"04/10/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(813 37)">
//               <tspan x={0} y={0}>
//                 {"04/10/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(35 37)">
//               <tspan x={0} y={0}>
//                 {"PROC - 007"}
//               </tspan>
//             </text>
//             <g transform="translate(0 -2)">
//               <text className="n" transform="translate(165 29)">
//                 <tspan x={0} y={0}>
//                   {"Alex Clark X Carmen Lucas"}
//                 </tspan>
//               </text>
//               <text className="o" transform="translate(165 49)">
//                 <tspan x={0} y={0}>
//                   {"0026545-45.5400.2.45.0025"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-6 3)">
//               <g className="p" transform="translate(1229 16)">
//                 <rect className="ba" width={95} height={30} rx={6} />
//                 <rect
//                   className="bb"
//                   x={0.5}
//                   y={0.5}
//                   width={94}
//                   height={29}
//                   rx={5.5}
//                 />
//               </g>
//               <text className="q" transform="translate(1308 36)">
//                 <tspan x={-61.599} y={0}>
//                   {"Indefinido"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-927 -758)">
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2359 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2371 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2383 787)"
//               />
//             </g>
//           </g>
//           <g transform="translate(0 240)">
//             <rect
//               className="i"
//               width={1540}
//               height={1}
//               transform="translate(0 64)"
//             />
//             <rect className="a" width={1540} height={64} />
//             <text className="n" transform="translate(1146 37)">
//               <tspan x={-86.379} y={0}>
//                 {"Dorothy Fuller"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(490 37)">
//               <tspan x={0} y={0}>
//                 {"TJE - GO"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(615 37)">
//               <tspan x={0} y={0}>
//                 {"13/08/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(813 37)">
//               <tspan x={0} y={0}>
//                 {"13/08/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(35 37)">
//               <tspan x={0} y={0}>
//                 {"PROC - 008"}
//               </tspan>
//             </text>
//             <g transform="translate(0 -10)">
//               <text className="n" transform="translate(165 37)">
//                 <tspan x={0} y={0}>
//                   {"Eliza Cunningham X Kelly James"}
//                 </tspan>
//               </text>
//               <text className="o" transform="translate(165 57)">
//                 <tspan x={0} y={0}>
//                   {"0026545-45.5400.2.45.0025"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-6 3)">
//               <g className="r" transform="translate(1229 16)">
//                 <rect className="ba" width={95} height={30} rx={6} />
//                 <rect
//                   className="bb"
//                   x={0.5}
//                   y={0.5}
//                   width={94}
//                   height={29}
//                   rx={5.5}
//                 />
//               </g>
//               <text className="s" transform="translate(1293 36)">
//                 <tspan x={-31.65} y={0}>
//                   {"Ativo"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-927 -758)">
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2359 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2371 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2383 787)"
//               />
//             </g>
//           </g>
//           <g transform="translate(0 305)">
//             <rect
//               className="i"
//               width={1540}
//               height={1}
//               transform="translate(0 64)"
//             />
//             <rect className="a" width={1540} height={64} />
//             <text className="n" transform="translate(1134 37)">
//               <tspan x={-75.004} y={0}>
//                 {"Eliza Collins"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(490 37)">
//               <tspan x={0} y={0}>
//                 {"TJE - PE"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(615 37)">
//               <tspan x={0} y={0}>
//                 {"07/04/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(813 37)">
//               <tspan x={0} y={0}>
//                 {"07/04/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(35 37)">
//               <tspan x={0} y={0}>
//                 {"PROC - 009"}
//               </tspan>
//             </text>
//             <g transform="translate(0 -10)">
//               <text className="n" transform="translate(165 37)">
//                 <tspan x={0} y={0}>
//                   {"Jessica Murphy X Megan Fuller"}
//                 </tspan>
//               </text>
//               <text className="o" transform="translate(165 57)">
//                 <tspan x={0} y={0}>
//                   {"0026545-45.5400.2.45.0025"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-6 3)">
//               <g className="r" transform="translate(1229 16)">
//                 <rect className="ba" width={95} height={30} rx={6} />
//                 <rect
//                   className="bb"
//                   x={0.5}
//                   y={0.5}
//                   width={94}
//                   height={29}
//                   rx={5.5}
//                 />
//               </g>
//               <text className="s" transform="translate(1293 36)">
//                 <tspan x={-31.65} y={0}>
//                   {"Ativo"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-927 -758)">
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2359 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2371 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2383 787)"
//               />
//             </g>
//           </g>
//           <g transform="translate(0 370)">
//             <rect
//               className="i"
//               width={1540}
//               height={1}
//               transform="translate(0 64)"
//             />
//             <rect className="a" width={1540} height={64} />
//             <text className="n" transform="translate(1131 37)">
//               <tspan x={-71.169} y={0}>
//                 {"Will Cooper"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(490 37)">
//               <tspan x={0} y={0}>
//                 {"TJE - SP"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(615 37)">
//               <tspan x={0} y={0}>
//                 {"25/07/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(813 37)">
//               <tspan x={0} y={0}>
//                 {"25/07/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(35 37)">
//               <tspan x={0} y={0}>
//                 {"PROC - 010"}
//               </tspan>
//             </text>
//             <g transform="translate(0 -10)">
//               <text className="n" transform="translate(165 37)">
//                 <tspan x={0} y={0}>
//                   {"Vincent Mendez X Sara Wade"}
//                 </tspan>
//               </text>
//               <text className="o" transform="translate(165 57)">
//                 <tspan x={0} y={0}>
//                   {"0026545-45.5400.2.45.0025"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-6 3)">
//               <g className="r" transform="translate(1229 16)">
//                 <rect className="ba" width={95} height={30} rx={6} />
//                 <rect
//                   className="bb"
//                   x={0.5}
//                   y={0.5}
//                   width={94}
//                   height={29}
//                   rx={5.5}
//                 />
//               </g>
//               <text className="s" transform="translate(1293 36)">
//                 <tspan x={-31.65} y={0}>
//                   {"Ativo"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-927 -758)">
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2359 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2371 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2383 787)"
//               />
//             </g>
//           </g>
//           <g transform="translate(0 435)">
//             <rect
//               className="i"
//               width={1540}
//               height={1}
//               transform="translate(0 64)"
//             />
//             <rect className="a" width={1540} height={64} />
//             <text className="n" transform="translate(1138 37)">
//               <tspan x={-79.481} y={0}>
//                 {"Tom Stewart"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(490 37)">
//               <tspan x={0} y={0}>
//                 {"TJE - PE"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(615 37)">
//               <tspan x={0} y={0}>
//                 {"23/07/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(813 37)">
//               <tspan x={0} y={0}>
//                 {"23/07/2019"}
//               </tspan>
//             </text>
//             <text className="n" transform="translate(35 37)">
//               <tspan x={0} y={0}>
//                 {"PROC - 011"}
//               </tspan>
//             </text>
//             <g transform="translate(0 -10)">
//               <text className="n" transform="translate(165 37)">
//                 <tspan x={0} y={0}>
//                   {"Nicolas Schneider X Philip Carpenter"}
//                 </tspan>
//               </text>
//               <text className="o" transform="translate(165 57)">
//                 <tspan x={0} y={0}>
//                   {"0026545-45.5400.2.45.0025"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-6 3)">
//               <g className="r" transform="translate(1229 16)">
//                 <rect className="ba" width={95} height={30} rx={6} />
//                 <rect
//                   className="bb"
//                   x={0.5}
//                   y={0.5}
//                   width={94}
//                   height={29}
//                   rx={5.5}
//                 />
//               </g>
//               <text className="s" transform="translate(1293 36)">
//                 <tspan x={-31.65} y={0}>
//                   {"Ativo"}
//                 </tspan>
//               </text>
//             </g>
//             <g transform="translate(-927 -758)">
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2359 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2371 787)"
//               />
//               <circle
//                 className="l"
//                 cx={3}
//                 cy={3}
//                 r={3}
//                 transform="translate(2383 787)"
//               />
//             </g>
//           </g>
//           <rect className="c" width={1540} height={45} />
//           <text className="t" transform="translate(1157 27)">
//             <tspan x={-101.213} y={0}>
//               {"RESPONS\xC1VEIS"}
//             </tspan>
//           </text>
//           <text className="t" transform="translate(1297 27)">
//             <tspan x={-51.529} y={0}>
//               {"STATUS"}
//             </tspan>
//           </text>
//           <text className="t" transform="translate(1469 27)">
//             <tspan x={-44.584} y={0}>
//               {"A\xC7\xD5ES"}
//             </tspan>
//           </text>
//           <text className="t" transform="translate(490 27)">
//             <tspan x={0} y={0}>
//               {"ORG\xC3O"}
//             </tspan>
//           </text>
//           <text className="t" transform="translate(615 27)">
//             <tspan x={0} y={0}>
//               {"\xDALTIMA CONSULTA"}
//             </tspan>
//           </text>
//           <text className="t" transform="translate(813 27)">
//             <tspan x={0} y={0}>
//               {"\xDALTIMA MOVIMENTA\xC7\xC3O"}
//             </tspan>
//           </text>
//           <text className="t" transform="translate(165 27)">
//             <tspan x={0} y={0}>
//               {"T\xCDTULO"}
//             </tspan>
//           </text>
//           <text className="t" transform="translate(35 27)">
//             <tspan x={0} y={0}>
//               {"C\xD3DIGO"}
//             </tspan>
//           </text>
//         </g>
//         <text className="u" transform="translate(955 673)">
//           <tspan x={0} y={0}>
//             {"Pastas"}
//           </tspan>
//         </text>
//         <g transform="translate(639 225)">
//           <rect
//             className="v"
//             width={217}
//             height={50}
//             rx={4}
//             transform="translate(1639 417)"
//           />
//           <text className="w" transform="translate(1678 448)">
//             <tspan x={0} y={0}>
//               {"Adicionar Processo"}
//             </tspan>
//           </text>
//         </g>
//       </g>
//       <g transform="translate(-900 -63)">
//         <g className="be" transform="matrix(1, 0, 0, 1, 900, 63)">
//           <rect
//             className="a"
//             width={430}
//             height={264}
//             transform="translate(310 100)"
//           />
//         </g>
//         <path
//           className="x"
//           d="M222.145,83.827V46.1H234.72V83.827Zm-18.861,0V20.957H220.05V83.827Zm-18.861,0V41.914h16.766V83.827Zm-18.861,0V56.584h16.766V83.827Zm-18.861,0V31.434h16.766V83.827Zm-18.861,0V10.477H144.6v73.35Zm-18.861,0V31.434h16.766V83.827Zm-18.861,0V41.914h16.766V83.827Zm-18.861,0V0H88.02V83.827Zm-18.861,0V20.957H69.159V83.827Zm-14.67,0V46.1H50.3V83.827Zm-18.861,0V20.957H35.627V83.827ZM0,83.827V41.914H16.766V83.827Z"
//           transform="translate(1385.28 295)"
//         />
//         <g transform="translate(1230 354.983)">
//           <text className="y" transform="translate(21.429 19)">
//             <tspan x={0} y={0}>
//               {"13.8%"}
//             </tspan>
//           </text>
//           <path
//             className="z"
//             d="M12.929,13.714V4.786A1.687,1.687,0,0,0,11.143,3h0A1.687,1.687,0,0,0,9.357,4.786v8.929H4l7.143,7.143,7.143-7.143Z"
//             transform="translate(-4 0.571)"
//           />
//         </g>
//         <text className="aa" transform="translate(1230 345)">
//           <tspan x={0} y={0}>
//             {"246K"}
//           </tspan>
//         </text>
//         <text className="ab" transform="translate(1230 228)">
//           <tspan x={0} y={0}>
//             {"Total Views"}
//           </tspan>
//         </text>
//       </g>
//       <g transform="translate(-440 -63)">
//         <g className="bd" transform="matrix(1, 0, 0, 1, 440, 63)">
//           <rect
//             className="a"
//             width={430}
//             height={264}
//             transform="translate(770 100)"
//           />
//         </g>
//         <path
//           className="ac"
//           d="M222.145,83.827V46.1H234.72V83.827Zm-18.861,0V20.957H220.05V83.827Zm-18.861,0V41.914h16.766V83.827Zm-18.861,0V56.584h16.766V83.827Zm-18.861,0V31.434h16.766V83.827Zm-18.861,0V10.477H144.6v73.35Zm-18.861,0V31.434h16.766V83.827Zm-18.861,0V41.914h16.766V83.827Zm-18.861,0V0H88.02V83.827Zm-18.861,0V20.957H69.159V83.827Zm-14.67,0V46.1H50.3V83.827Zm-18.861,0V20.957H35.627V83.827ZM0,83.827V41.914H16.766V83.827Z"
//           transform="translate(1385.28 295)"
//         />
//         <g transform="translate(1230 354.983)">
//           <text className="y" transform="translate(21.429 19)">
//             <tspan x={0} y={0}>
//               {"13.8%"}
//             </tspan>
//           </text>
//           <path
//             className="z"
//             d="M12.929,13.714V4.786A1.687,1.687,0,0,0,11.143,3h0A1.687,1.687,0,0,0,9.357,4.786v8.929H4l7.143,7.143,7.143-7.143Z"
//             transform="translate(-4 0.571)"
//           />
//         </g>
//         <text className="aa" transform="translate(1230 345)">
//           <tspan x={0} y={0}>
//             {"246K"}
//           </tspan>
//         </text>
//         <text className="ab" transform="translate(1230 228)">
//           <tspan x={0} y={0}>
//             {"Total Views"}
//           </tspan>
//         </text>
//       </g>
//       <g transform="translate(785 -522)">
//         <g className="bc" transform="matrix(1, 0, 0, 1, -785, 522)">
//           <rect
//             className="a"
//             width={660}
//             height={264}
//             transform="translate(1230 100)"
//           />
//         </g>
//         <g transform="translate(384 -238)">
//           <g transform="translate(465 900)">
//             <g className="ad" transform="translate(0 165)">
//               <circle className="ba" cx={7} cy={7} r={7} />
//               <circle className="bb" cx={7} cy={7} r={5.5} />
//             </g>
//             <g className="ae" transform="translate(0 132)">
//               <circle className="ba" cx={7} cy={7} r={7} />
//               <circle className="bb" cx={7} cy={7} r={5.5} />
//             </g>
//             <g className="af" transform="translate(0 99)">
//               <circle className="ba" cx={7} cy={7} r={7} />
//               <circle className="bb" cx={7} cy={7} r={5.5} />
//             </g>
//             <g className="ag" transform="translate(0 66)">
//               <circle className="ba" cx={7} cy={7} r={7} />
//               <circle className="bb" cx={7} cy={7} r={5.5} />
//             </g>
//             <g className="ah" transform="translate(0 33)">
//               <circle className="ba" cx={7} cy={7} r={7} />
//               <circle className="bb" cx={7} cy={7} r={5.5} />
//             </g>
//             <g className="ai">
//               <circle className="ba" cx={7} cy={7} r={7} />
//               <circle className="bb" cx={7} cy={7} r={5.5} />
//             </g>
//           </g>
//           <g transform="translate(487 898)">
//             <text className="aj" transform="translate(0 13)">
//               <tspan x={0} y={0}>
//                 {"Canada"}
//               </tspan>
//             </text>
//             <text className="aj" transform="translate(202.909 13)">
//               <tspan x={-46.351} y={0}>
//                 {"$29,193"}
//               </tspan>
//             </text>
//           </g>
//           <g transform="translate(487 931)">
//             <text className="aj" transform="translate(0 13)">
//               <tspan x={0} y={0}>
//                 {"Brazil"}
//               </tspan>
//             </text>
//             <text className="aj" transform="translate(202.909 13)">
//               <tspan x={-46.351} y={0}>
//                 {"$18,832"}
//               </tspan>
//             </text>
//           </g>
//           <g transform="translate(487 964)">
//             <text className="aj" transform="translate(0 13)">
//               <tspan x={0} y={0}>
//                 {"Egypt"}
//               </tspan>
//             </text>
//             <text className="aj" transform="translate(202.909 13)">
//               <tspan x={-46.351} y={0}>
//                 {"$19,758"}
//               </tspan>
//             </text>
//           </g>
//           <g transform="translate(487 997)">
//             <text className="aj" transform="translate(0 13)">
//               <tspan x={0} y={0}>
//                 {"Russia"}
//               </tspan>
//             </text>
//             <text className="aj" transform="translate(202.909 13)">
//               <tspan x={-46.351} y={0}>
//                 {"$23,078"}
//               </tspan>
//             </text>
//           </g>
//           <g transform="translate(487 1030)">
//             <text className="aj" transform="translate(0 13)">
//               <tspan x={0} y={0}>
//                 {"China"}
//               </tspan>
//             </text>
//             <text className="aj" transform="translate(202.909 13)">
//               <tspan x={-46.351} y={0}>
//                 {"$29,193"}
//               </tspan>
//             </text>
//           </g>
//           <g transform="translate(487 1063)">
//             <text className="aj" transform="translate(0 13)">
//               <tspan x={0} y={0}>
//                 {"Australia"}
//               </tspan>
//             </text>
//             <text className="aj" transform="translate(202.909 13)">
//               <tspan x={-46.351} y={0}>
//                 {"$37,760"}
//               </tspan>
//             </text>
//           </g>
//         </g>
//         <rect
//           className="i"
//           width={1}
//           height={220}
//           transform="translate(826 644)"
//         />
//         <g transform="translate(0 -96)">
//           <path
//             className="ak"
//             d="M166.848-144.9c-.324-.163-.849.148-.77.366.053.15.271.339.946.515s.756.636,1.04.651.311-.258.243-.624.337-.786.378-.854-.175-.176-.73-.054S167.173-144.737,166.848-144.9Zm-4.446-1.736c-.122.529.068,1.194.378.881s.46-.162.635-.393.027-1.084.149-1.491-.541-.6-.838-.34-.542-.045-.661.163C161.915-147.557,162.524-147.165,162.4-146.636Zm89.44,41.91c.215.352.486.027.486-.218S251.631-105.07,251.842-104.726Zm7.134,5.043c.541-.407-.892-.244-.919-.57s-1.081-.027-1.594-.244.568-.407.918-.624-.216-.3-1.08-.027-1.865-.6-1.893-.217-1.567-.163-1.945-.434-1.838-.624-2.136-.109-.554.053-.432.542c.081.326.432.136.675.136s.135.46.486.515,1.515.38,1.621.136,1.19,0,1.73.434a3.629,3.629,0,0,0,2.27.38c.487-.082,1.027.325,1.216.053S258.435-99.276,258.976-99.683Zm-8.621-4.854c0-.189.134-.271.378-.216s.216-.515.027-.57-.3-.732-.756-.732-.378.379-.108.407.432.244.351.434-.189-.19-.568-.162-.134-.462-.567-.489-.352-.814-.812-.814-.486-.379-.189-.651-.459-.515-.459-.84-.487-.135-.487-.407-.216-.135-.459-.461-.351-.027-.568-.271-.513-.38-.7-.3-.622-.353-.785-.787c-.128-.345-1.377-.921-1.54-1.383s-.594-.651-1.323-.623-1.018-.717-1.19-.353c-.216.461.784,1.491,1.243,1.763s.7,1.247,1.243,1.3.594,1.763,1,1.844,1.271,1.411,1.4,2.115,1.027,1.058,1.325,1.573,1.485,1.221,1.648,1.437.324.705.459.461.7,0,.973.028.351-.977.324-1.356A5.676,5.676,0,0,1,250.355-104.537Zm-7.621-3.661c.325-.325-.514-1-.567-.732S242.409-107.872,242.733-108.2Zm1.189,2.115c.19-.163-.261-.944-.432-.515C243.437-106.462,243.734-105.92,243.922-106.083Zm18.216,7.4c.162.244.621.244.811.407s.864.515.864.054S261.957-98.951,262.138-98.679Zm-8.811-8.244c.189.3.785.353.785.921s.513,1.464.864,1.221.622.109.73.353.946-.19,1.216-.135,1.108.217,1.162.542.811-.027,1.324-.216.216-1.736.7-2.034a1.4,1.4,0,0,0,.54-1.41c-.054-.542,1.189-.569,1.378-.786s-.27-.57-.621-.732-.055-.515-.3-.733-.649-.787-.3-.814-.243-.515.054-.677c.04-.022.086-.045.135-.069.319-.158.779-.367.568-.555-.244-.216.73-.027.837-.353s-.378-.6-.621-.542-.811.027-.811-.217-.514-.705-.837-.705-.7.651-.73.922-.54.244-.487.623c.021.15-.075.214-.2.254-.191.061-.45.06-.45.207,0,.239-.409-.088-.63-.105s-.721.756-.829,1.271-.595.353-1.324.407-.432.814-.594,1.166c-.149.322-.949-.26-1.354-.343a.416.416,0,0,0-.1-.01c-.351.027-.933.958-.594,1.274C253.246-107.818,253.138-107.221,253.327-106.923Zm16.7-2.277c-.432.6.141,2.07.487,2.006.3-.053-.243-.786.352-.732s.325-.3.325-.678-.541-.053-.541-.244S270.461-109.8,270.028-109.2Zm-7.459,4.907c.406.028.351.624.27.977s-.245,1.19.109,1.058c.433-.163.7-.705.459-.895s-.216-1.383-.109-1.682.838-.081.594.38.46.407.46.922.4.244.837.109.352-.38.054-.706.216-.786-.189-1.058-.676-.677-.3-.758,1.514-.733,1.378-1-1.729.053-1.865.542-1.27-.054-1.135-.9,2.379-.976,3.027-.677,1.351-.488,1.594-.949-.513.081-.973.38-1.676-.028-2.3-.245-.6.38-1.109.461-.4,1.221-.649,1.356-.243.976-.73,1.763S262.165-104.32,262.57-104.293Zm9.189-.108c.568,0,.865.407,1.162.407s.081-.705-.622-.922-1.9-.032-1.783.326C270.623-104.266,271.191-104.4,271.758-104.4Zm-2,.163c.216-.38-1.233-.8-1.109-.3C268.758-104.1,269.542-103.859,269.759-104.238Zm-2.15,5.552c.047-.057.089-.11.123-.156a.427.427,0,0,1,.092-.083c.027-.02.058-.04.092-.061a19.1,19.1,0,0,0,1.925-.887c.081-.217-.811.053-1.352.027-.365-.018-.512.284-.783.5-.025.02-.052.037-.079.056a.871.871,0,0,1-.3.126,1,1,0,0,1-.122.02l-.017,0a.942.942,0,0,0-.294.073c-.523.217-.8.845-.436,1.039S267.319-98.337,267.609-98.686Zm-7.66-1.213c-.27-.19-.605.257-.432.488a1.162,1.162,0,0,0,1.324.217c.675-.325,1.134-.027,1.3-.38s-1.244-.677-1.352-.433S260.219-99.71,259.949-99.9Zm6.567-.054c-.73-.108-1.216.434-1.946.163s-1.822.005-1.7.244c.108.217.755.244,1.486.272a11.621,11.621,0,0,0,1.864-.407C266.7-99.71,267.246-99.846,266.516-99.954Zm-168.222-17.2c.188-.079.164-.353-.047-.533s-.875.093-.671.188-.1.318.023.431S98.106-117.074,98.294-117.151ZM82.317-131.178c0,.368.3.407.312.618s.309.489.367.369c.1-.212-.219-.408-.249-.564s.093-.368-.094-.688S82.317-131.546,82.317-131.178ZM303.81-88.34c.053.326,2.324,2.061,2.648,1.844S303.754-88.678,303.81-88.34ZM255.652-193.506c.271.353,1.621.162,1.648-.272s-1-.38-1.108-.163S255.5-193.709,255.652-193.506Zm-5.2,32.837c0,.57-1.865.855-2.027.611-.142-.214,1.378-.285,1.743-1.1s1.749-1.232,2.432-2.318c.487-.774.892-1.952,1.175-1.871s-.243,2.562-1.013,3.254S250.449-161.238,250.449-160.669Zm1.214,39.758a2.552,2.552,0,0,1-.018-.291c0-.007,0-.012,0-.02A2.714,2.714,0,0,0,251.663-120.91Zm-4.927-7.815a.486.486,0,0,0,.057-.029c-.009,0-.015.014-.024.019A.244.244,0,0,1,246.736-128.726Zm-.963.775c.012,0,.02.013.031.018-.017-.006-.029-.024-.05-.02C245.761-127.954,245.766-127.951,245.773-127.951Zm-7.808-6.01.01,0-.06.028Zm-3.3-.1a.253.253,0,0,1,.049-.037.219.219,0,0,0-.06.055C234.661-134.05,234.662-134.058,234.667-134.062Zm-.174-23.192a.415.415,0,0,0,.065,0,.338.338,0,0,1-.043,0Zm-.575-.208a.6.6,0,0,0,.066.061.72.72,0,0,1-.057-.048S233.922-157.458,233.919-157.462Zm-5.613,21.172a.19.19,0,0,0,.055-.1.111.111,0,0,1-.018.056A.378.378,0,0,1,228.305-136.29Zm-5.463-17.273c-.675.732-.189,1.112-.486,1.166-.319.058-.487-1.112-.109-1.492a3.142,3.142,0,0,1,2.351-.353,10.513,10.513,0,0,0,2.3-.108c.19.053-.189.434-.946.434S223.519-154.3,222.843-153.564Zm3.785,13.3c.011-.052.02-.109.03-.166,0,.02-.005.039-.009.059C226.642-140.334,226.635-140.3,226.628-140.265Zm-.768-1.523c.005.005.007.013.012.019-.012-.014-.025-.03-.038-.044C225.843-141.8,225.851-141.8,225.86-141.788Zm-.585-.093c0,.01,0,.009-.009.021Zm-2.479-1.765a1.079,1.079,0,0,0-.228-.073A1.113,1.113,0,0,1,222.8-143.647Zm.159.1s.01,0,.012.008c.062-.015.117-.026.166-.035-.048.009-.105.021-.166.036A.146.146,0,0,0,222.956-143.546Zm-.911-2.656s-.141.021-.328.042C221.9-146.181,222.042-146.2,222.045-146.2Zm-.066,2.2c-.118-.071-.41.149-.7.394C221.568-143.848,221.86-144.068,221.979-144Zm-1.419.8-.054.019Zm-1.691-3.757a1.806,1.806,0,0,1-.251-.008A1.964,1.964,0,0,0,218.869-146.954Zm.036-1.643a.511.511,0,0,0-.1-.02.546.546,0,0,1,.089.012C218.9-148.6,218.9-148.6,218.905-148.6Zm-9.566-5.569c-.1-.235,1.5.028,1.266.347C210.5-153.67,209.428-153.948,209.339-154.166Zm1.181,12.219a.267.267,0,0,1,.05-.016.323.323,0,0,0-.067.032C210.51-141.934,210.514-141.944,210.52-141.947Zm-.379,6.043a1.1,1.1,0,0,1-.13-.148A1.1,1.1,0,0,0,210.141-135.9Zm-.513-15.6c-.675.488-1.323.407-1.108-.19s.244-1.3-.108-1.3-.108,1.247-.378,1.328c-.239.072-.332-.905-.132-1.418a.76.76,0,0,1,.077-.155c.3-.434.7-.075.837.028.118.086.054-.46.378-.434s-.027.542.217.542c.189,0,.622.673.486,1.2A.687.687,0,0,1,209.628-151.5Zm-4.146,3.093-.01.008Zm-2.07.894c-.324-.109-.73-.38-.837,0s-.244.786.189.758.352.272.054.57.46-.054.513.217.3.3.19.732a5.743,5.743,0,0,0,0,1.228,1.2,1.2,0,0,1-.028.481,4.112,4.112,0,0,1-1.974.434c-.783.028-.837-1-1.676-1a1.172,1.172,0,0,1-1.105-1.083.771.771,0,0,1,.16-.544c.459-.569.811-1.464.54-1.952a11.342,11.342,0,0,0-.817-1.058c-.513-.631-1.064-1.329-1.048-1.6.028-.46.216-.759-.352-1.246s.055-.814.46-1.329c.362-.46,1.13-.661,1.619-.989a1.458,1.458,0,0,0,.165-.123,2.41,2.41,0,0,1,1.919-.624c.621.163,1.135-.108,1.405.272s0,1.085.108,1.356-.487.3-.892.244-1.243.163-1.135.407.406.815-.134.515-.757.3-.459.3.7.353.7.6.027.786.3.705.271.407.649.38.73.109.432.46.189,1.329.3,1.112c.068-.136.008-.432.115-.621.063-.111.185-.185.426-.165.649.053.351.814.7.84s.757.57.433.542S203.737-147.409,203.412-147.516Zm-5.96,1.323a3.627,3.627,0,0,1-.62.37A3.571,3.571,0,0,0,197.452-146.193Zm-.786-2.706-.015-.008c-.051-.028-.1-.06-.152-.091C196.554-148.964,196.61-148.931,196.666-148.9Zm4.934,23.325-.055.017.12-.036Zm-6.119-22.65c.018.033.04.068.064.1-.02-.031-.042-.062-.058-.091C195.485-148.216,195.484-148.22,195.481-148.224Zm-.329,1.686a.008.008,0,0,1,0,0S195.151-146.539,195.152-146.538Zm-.243-.207a.27.27,0,0,0-.085,0A.271.271,0,0,1,194.909-146.745Zm-1.159-1.361a.513.513,0,0,1,.027.055.758.758,0,0,0-.068-.116A.655.655,0,0,1,193.75-148.107Zm-3.408,9.53c-.122,0-.229.009-.42.012C190.115-138.568,190.219-138.577,190.342-138.576Zm-5.418,30.614c.358.09.625.226.6.335-.04.223-.649.122-.649.589,0,.032,0,.062,0,.093a.97.97,0,0,1-.441.863c-.263.122.365.508.061.57s-.993-.285-1.48-.082c-.327.137-.259-.684-.005-1.4.169-.479.419-.914.694-1A2.534,2.534,0,0,1,184.924-107.963Zm1.071,13.269c-.238.345-.912-.732-.993-1.4s.385-1,.1-1.627c-.237-.526-.384-1.034-.215-1.188a.19.19,0,0,1,.134-.052c.309,0,.674,1.174.657,1.858a.966.966,0,0,1-.049.318c-.175.459.366,1.5.392,1.94A.247.247,0,0,1,185.994-94.694Zm-1.723-4.221c.012.019.025.046.037.068a1.648,1.648,0,0,0-.1-.158A.98.98,0,0,1,184.272-98.914ZM184-94.8l.008,0-.017,0Zm3.394-26.394c0-.012-.005-.027-.007-.04,0,.011,0,.023.005.033A.017.017,0,0,0,187.394-121.194Zm5.281,1.768,0,0,.014-.023ZM182.392-86.812a.09.09,0,0,1,.035.03.109.109,0,0,0-.053-.036Zm-.757-13.595c-.208-.343-.416-.8-.667-.937-.446-.244-.628-3.315-.4-3.4.029-.011.057.022.085.085a6.333,6.333,0,0,1,.228.953,4.393,4.393,0,0,0,.559,1.747c.466.427.385.916.487,1.2s.506.611.223.733C181.961-99.943,181.8-100.14,181.635-100.407Zm-1.153,13.241a.341.341,0,0,0-.3-.36.34.34,0,0,1,.3.358s0,0,0,0A.007.007,0,0,0,180.482-87.167Zm1.262-18.468h0l.012,0Zm-2.992-7.6.212.529.014.037Zm-3.6,21.945.1-.02-.157.031Zm-.137-26.764.111.135C175.081-117.969,175.04-118.018,175.014-118.049Zm-5.73,7.7a.684.684,0,0,0-.057.089A.751.751,0,0,1,169.284-110.347Zm-1.03-19.122-.725.393,1.542-.838Zm.4,14.637a.4.4,0,0,0,.082.1.37.37,0,0,1-.08-.1S168.659-114.831,168.658-114.832Zm-1.232-5.187a.259.259,0,0,0,.1.025.438.438,0,0,1-.053-.005C167.453-120,167.442-120.013,167.426-120.018Zm-1.393,10.1c.229.01.48.019.722.026l-.114,0Zm-.422-20h0Zm-.5,20.012-.225.064.394-.113Zm-1.644-26.717c.037-.025.076-.054.114-.081l-.159.115Zm-6.515,17.684c0,.018,0,.036,0,.054,0,0,0-.007,0-.01S156.955-118.92,156.954-118.935Zm-1.661.93a.421.421,0,0,0,.151-.009.4.4,0,0,1-.145.01Zm-.9-.011a.215.215,0,0,1,.209-.107.191.191,0,0,0-.109.02A.261.261,0,0,0,154.4-118.015Zm-.064.108a1.033,1.033,0,0,1,.058-.1A.878.878,0,0,0,154.332-117.908Zm-2.374,1.058a.115.115,0,0,0,.043,0s-.006.006-.011.006A.145.145,0,0,1,151.958-116.849Zm-2.472-.621a.6.6,0,0,1,.149.049.549.549,0,0,0-.169-.049Zm-2.331.175a.326.326,0,0,0,.093.053.309.309,0,0,1-.085-.046Zm-.256,2.622c0-.008.012-.012.015-.02a.253.253,0,0,0-.016.031S146.9-114.671,146.9-114.673Zm-1.9-.8a.256.256,0,0,0-.032-.1.226.226,0,0,1,.029.064A.249.249,0,0,1,145-115.478Zm-.906-3.747c0,.061,0,.1,0,.1S144.095-119.169,144.1-119.225Zm-.876-2.259a.73.73,0,0,1,.03.073c-.011-.028-.023-.055-.039-.087A.124.124,0,0,1,143.222-121.485ZM183.162-161.2a.491.491,0,0,0,.036.066s0,0-.007-.006S183.172-161.181,183.162-161.2Zm-3.122-5.04a.255.255,0,0,0,.057.1.194.194,0,0,1-.046-.068A.314.314,0,0,1,180.04-166.239Zm-.911,9.672c-.1.027-.223.061-.337.1C178.905-156.507,179.022-156.541,179.128-156.567Zm.185-11.473s0-.005,0-.009a.2.2,0,0,0,.009.021S179.315-168.036,179.313-168.041Zm-3.491,4.659s0,.005,0,.009a.17.17,0,0,1-.006.081A.165.165,0,0,0,175.823-163.382Zm-.706,7.281a.192.192,0,0,0-.012-.017s.01.005.012.008S175.116-156.1,175.117-156.1Zm-.006-7.7c-.018,0-.027-.018-.034-.042a.172.172,0,0,1,0-.023C175.081-163.831,175.089-163.8,175.111-163.8Zm-.345,12.3a.177.177,0,0,0,.075-.093v.005A.182.182,0,0,1,174.766-151.5Zm.01-4.837c-.007-.005-.015-.007-.021-.012s-.012-.015-.019-.021Zm-.052,6.8s0,0,0,0a.118.118,0,0,0,.021.074.1.1,0,0,1-.02-.063A.021.021,0,0,1,174.724-149.533Zm.005-.111c0,.013,0,.024,0,.036a.218.218,0,0,1,0-.024S174.729-149.64,174.729-149.644Zm-1.106,1.757h.007a.351.351,0,0,1,.043,0c-.023,0-.048,0-.068,0Zm-.094.026a.111.111,0,0,1,.035-.015.021.021,0,0,1,.008,0h.006c-.037.008-.063.021-.069.044A.049.049,0,0,1,173.529-147.861Zm-.552-1.605c.1.069.176.122.176.122l-.053-.038Zm-.049-.034c-.06-.04-.125-.083-.192-.126C172.8-149.582,172.868-149.54,172.928-149.5Zm.142-4.27c-.022.018-.043.036-.046.056a.088.088,0,0,1,.025-.041A.13.13,0,0,1,173.07-153.769Zm-.79,3.948a.118.118,0,0,1,.029-.007c-.02,0-.043.019-.064.029C172.255-149.8,172.268-149.818,172.279-149.821Zm-.76-8.058a.464.464,0,0,0,.125.115.449.449,0,0,1-.12-.109ZM169.4-154.27c.035-.029.06-.053.06-.053l-.02.019Zm-.159-.4s.011.012.015.016-.014-.018-.019-.02ZM168.2-159.55a.5.5,0,0,0,.048-.1A.435.435,0,0,1,168.2-159.55Zm-1.8,5.151.081.009-.041,0C166.42-154.394,166.409-154.4,166.395-154.4Zm-2.938-.94s0,0,0-.008a.408.408,0,0,0-.02.114A.469.469,0,0,1,163.457-155.339Zm-1.938-.147a.578.578,0,0,0,.022-.085c0,.017,0,.039-.008.054S161.522-155.5,161.519-155.486Zm-.477,2.032c-.073.233.005.373.1.433-.1-.061-.182-.2-.1-.448C161.042-153.463,161.043-153.46,161.042-153.454Zm-.525-4.231.01,0c-.019-.005-.044-.008-.065-.013C160.478-157.691,160.5-157.69,160.517-157.686Zm-.276-.856a.118.118,0,0,1-.008.011S160.239-158.538,160.241-158.542Zm-.327.789h.032a1.163,1.163,0,0,0-.178.012A.974.974,0,0,1,159.913-157.753Zm21.136-27.464.009-.007a.847.847,0,0,0-.063.076A.786.786,0,0,1,181.049-185.217Zm-7.554.458c.029.02.054.042.082.062a1.554,1.554,0,0,0-.17-.118C173.438-184.8,173.466-184.777,173.495-184.759Zm153.556,5.909c.149-.19.459-.122.487-.285s.19-.515.474-.5c-.163-.339-1.028-.895-1.244-1.207s-1.256-.461-1.256-.3c-.5-.393-1.594-.42-1.608-.231s.257.2.419.421-.216.338-.135.582-.406-.122-.581-.257-.094-.664-.041-.936-.31-.217-.351-.488-1.256-.827-1.769-1.044-1.175-.407-1.352-.678-1.094-.3-1.446-.664a6.145,6.145,0,0,0-2.554-1.058c-.662-.04-.514-.406-.838-.353a12.992,12.992,0,0,1-2.149-.081c-.432-.068-.527.258-.838.136s-1.919-.706-2.107-.489-.108.529-.3.583,0,.326.446.732.175.719-.23.9a1.239,1.239,0,0,1-1.257-.475c-.2-.312-.756-.175-.892-.582.7-.013,1.068-.2,1.109-.5s-.73-.5-1.15-.475-.649.61-1.08.855a4.131,4.131,0,0,1-2.284-.258,7.992,7.992,0,0,0-2.757.163c-.243.163-.067.8-.189.855s-.243-.733-.243-.881-.284-.258-.7-.258c-.31-.366-.649-.542-.324-.773s-.594-.949-1.486-1.3a7.773,7.773,0,0,0-3.46.013,10.341,10.341,0,0,1-2.135.122c-.514.014-.1-.2-.243-.447s-1.028-.542-1.15-.339a2.558,2.558,0,0,0-1.5-.529c.284-.3.932-.217.649-.651s-2.717-.57-2.945-.488-.014.393-.541.895-1.04.163-.973-.081.717-.2.717-.448-.893-.109-1.027-.312.189-.339.512-.245.892.15.919,0-.337-.175-.878-.271a12.1,12.1,0,0,0-2.541-.339c-.689.068-1-.257-1.377-.285s-.379.2-.2.42-.365.353-.811.285-1.094.244-.838.57.514-.1.73.013-.568.339-.243.489.271.46.284.623-.541.244-.743,0-.487-.028-.866-.054c.15.257.284.515-.256.57s-.406-.5-.73-.434-1.027-.257-1.406-.244-.553.313-1.054.353a1.887,1.887,0,0,1-1.378-.529c-.756.272-.77.868-1.014.909s-.337.569-.581.7-.256-.2-.567-.175-1.311-.949-1.365-1.234-.675-.828-.837-.936c.568.19.824.19,1.027.081s.175-.61-.176-.624c.135-.42-.446-.949-.23-1-.472-.366-.783-.611-.8-.759s-1.27-.2-1.216.013c-.27-.2-.783-.149-1.378-.312s-.608-.583-.811-.61-.134.582-.432.447a.343.343,0,0,0-.46.474c.162.352.014.407-.013.691-.892-.081-.892.34-1.649.15s-1.094.013-1.229-.231c-.419.136-1.581.054-1.676-.244s.2-.353.378-.434-.19-.2-.824-.163-1.041-.325-1.69-.258a20.828,20.828,0,0,0-2.3.3c-.2.094.189.461-.122.488s-.094-.6-.149-.895a2.261,2.261,0,0,1-1.405.027,2.5,2.5,0,0,0-1.054-.542c-.527-.135-1.176.434-1.026.6s.54.041.554.149c.027.223-1.121.136-1.121.326s-1.068.448-1.393.488c-.888.112-1.08.109-1.5.462s-.094-.313.23-.637.662-.191.852-.448.486-.231,1-.313.486-.379.73-.488.837-.338.945-.583a3.358,3.358,0,0,1,1.568-.637c.244.014.3-.488.433-.488a7.264,7.264,0,0,0,1.108-.434.716.716,0,0,0,.419-.555c.013-.176-.365-.15-.406-.312.743-.271.459-.651.23-.583s.121-.2-.082-.447-.608.15-.594-.109a1.052,1.052,0,0,0-.19-.746c-.162-.162-.459.285-.8.028s-1.325-.421-1.325-.312-.472-.163-.567-.054a2.349,2.349,0,0,1-1.122.027c-.243-.068-.581.1-.594.339s-.973.149-1.149.108.663-.732.663-.854-1.419.028-1.5-.108-.77-.177-1.081-.163c.554-.136.811-.38,1.122-.434-.028-.542-.352-.447-.663-.542a4.758,4.758,0,0,0-.959-.244,8.516,8.516,0,0,0-1.2.257c-.635.122-.69.61-1.013.759s-.892.746-.621.8.134.218.175.394-.2.217-.514.163-1.4-.041-1.391.191.635.338.594.46-.473-.013-.689-.135-.7-.054-.8.176-.473.176-.594.122-.392.109-.594.041.406-.367.257-.516-.8-.013-.865.231-.46-.176-.608-.1a5.953,5.953,0,0,1-.6.3c-.284.122-.77-.135-.878.082s.541.284.554.379-1.473.081-1.514.231-.541.15-1.149.163-.365.312-.852.407-.7.109-.864.353a.469.469,0,0,1-.7.094c-.122.15-.351.394-.5.339-.094.2.028.406-.094.556s-.649-.175-.784-.04.257.312.5.284a.354.354,0,0,1,.406.312c.027.176-.568-.109-.69.041.609.271.419.366.649.569.183.213-.079.272-.053.434-.257-.081-.974-.135-1.122.041-.608-.013-1.122.19-1.784.217a15.178,15.178,0,0,0-2.364.2c-.338.122-.622.6-.311.908s.013.447.013.651.811.623,1.243.664.784.569.527.895-1.04-.094-1.554-.5a4.048,4.048,0,0,0-2.095-.542c-.391.027-.162-.353-.662-.34s-.918.462-.581.462c.2.3.473.257.878.434s-.337.42-.756.135a.709.709,0,0,0-.987.2c-.121.216.487.84,1.216.949s.487.338.824.46c-.365.286-.824-.081-1.189-.271s-1.351.082-1.554-.136.135-.433-.054-.6-.027-.529.216-.909a.864.864,0,0,0-.391-1.139c-.351-.109-.325.257-.244.366a1.13,1.13,0,0,1-.23.962c-.271.339-1.095.339-1.095.57s-.553.407-.365.57a7.219,7.219,0,0,1,1.04,1.261c.109.257-.662,1.071-.54,1.545s-.109.692.04.922.487.027.7.122.568-.135,1.068-.231,1.418.434,1.756.6.163.434.339.705-.406.272-.42.678,1.013.583,1.054.705-.73.027-1.027-.082-.325-.5-.419-.582.2-.407.23-.665-.337-.407-.459-.583-.337-.434-.581-.379a4.04,4.04,0,0,0-1.405.379c-.271.244.04.936.19,1.275s-.785.813-.757,1.084-.284.393-.689.611-.852.379-.838.732-.54.163-.824,0-.649.094-1.054.081-.4-.353-.73-.231a.316.316,0,0,1-.446-.393.855.855,0,0,0,1.013.068c.271-.149.135.19.527.217.771-.15.784-.244.69-.394s.216-.257.4-.339c.213-.091.109-.393.284-.488.432-.312.513-.6.69-.6s.27-.285.162-.434.068-.556.243-.61c-.134-.461-.73-.868-.689-1.125s-.109-.732-.028-.936a2.346,2.346,0,0,0-.013-.868,5.466,5.466,0,0,1,.23-.962c.081-.447-.473-.922-.743-1.044s-.1-.366.3-.691.419-1.342.392-1.56-.825-.406-1.135-.379a12.223,12.223,0,0,1-1.742-.082c-.284-.054-.379.244-.514.515a6.324,6.324,0,0,0-.608,1.3c-.175.611-.892.8-1.216.936s-.527.583-.378.8c.662.2.5.773.4.854s.176.285-.053.434-.446.462-.311.624.8.244,1.081.407.175.461.392.746.446.109.553.284-.391.882-.568.909-.892-.718-1.108-.881-1.054-.42-1.473-.637a7.949,7.949,0,0,1-1.216-.5,2.515,2.515,0,0,0-1.69-.448c-.837.013-1.378-.19-1.662-.15s-.175-.284-.674-.5-.825-.515-1.109-.366-.175.692.257.758.216.3.675.272.594.135.581.42a1.109,1.109,0,0,0,.419.759c.2.191.081.5-.284.5s-.784.055-.621.312c-.838.054-.622-.2-.473-.353s-.325-.339-.554-.42-1.148.6-1.405.705-.892-.163-1.54,0-.608.677-.852.624-.959.067-1.23-.1c.513-.231.608-.326.446-.515s.217-.488.2-.624-1.067.217-1.243.366.013.421-.175.515a3.141,3.141,0,0,0-2.5.38c-.3.339-.878.353-.878.542s-.717.176-1,.312-.1.692-.2.963-1.216.19-1.554.2-.46-.651-.73-.692-.108-.42-.028-.582.3-.028.635-.244.675.108.811-.041-.513-.543-.554-.881-.756-.434-1.162-.326a1.74,1.74,0,0,1-1.134-.122c.581.461.365.786.432.99a1.58,1.58,0,0,1-.352,1.017c-.244.353-.068.339.3.326s.338.461.338.813-.284.448-.284.706c-.487.094-.609-.068-.662-.285s-.608-.1-.919-.177-.433.055-.581.285a1.235,1.235,0,0,1-.811.353c-.255.03-.635.475-.878.637s-.284.474.054.8.406.542.379.718-.946.122-1.094-.068a1.376,1.376,0,0,0-.946-.217c-.2.041-.756-.61-1.04-.623s-.46.338-.554.515.135.231.27.529.635.312.892.312.162.394.081.556-.554.285-.689.109-.7,0-.716-.217a.761.761,0,0,0-.838-.475c-.418.068-.5-.2-.473-.529s-.229-.515-.216-.664-.189-.448.027-.6.054-.38.068-.583-.365-.515-.7-.515-.27-.339-.553-.407a1.776,1.776,0,0,1-.892-.745,8.244,8.244,0,0,0,1.676.515c.635.081.892.379,1.594.5s1.122.2,2.136.353a4.106,4.106,0,0,0,2.649-1.166c.284-.285-.082-.867-.082-1.085s-.459-.244-.527-.406a.888.888,0,0,0-.756-.461c-.392,0-.446-.448-.757-.42s-.527-.136-1.337-.678a4.5,4.5,0,0,0-2.135-.84c-.608-.257-.919-.231-1.135-.068s-.432-.15-.837-.054-.622-.176-.513-.3.7-.013.675-.216-.243,0-.608-.245-.568-.081-.649.122a2.25,2.25,0,0,1-.617-.07c-.218-.137-.631-.155-.681.03-.392-.244-.973-.407-1-.5.675.163.825.081,1.068-.149s.581-.041.621-.244-.391-.34-.472-.462a.775.775,0,0,0-.69-.23c-.3.054-.311-.068-.487-.231s-.715.109-.715.488c-.1-.122-.378-.366-.108-.434s.121-.474-.379-.515-.689.379-.567.515-.338.719-.541.719.027-.5.013-.773-.2-.122-.581.312-.662.827-.878.868-.189-.393.163-.583.365-.705.594-.705c-.446-.434-.5-.054-.608.054s-.662-.19-.649-.081c-.027.556-.229.732-.365.488s-.472-.054-.634.216-.379.257-.216.353a.313.313,0,0,1-.1.529c-.243.068-.149-.665-.337-.6.445-.353.7-.732.675-.827a1.4,1.4,0,0,1-1.068.231c-.337-.013-.324.394.054.61a2.6,2.6,0,0,0-.946.2c-.2.1.487.339.514.461-.514.041-.892-.122-.919-.353a5.666,5.666,0,0,1-.082.773.516.516,0,0,0-.823-.231c-.271.162.04-.3-.069-.529s-.352,0-.635.054c-.081.448-.108.718-.337.677-.27.434-.594.448-.622.258s-.487-.136-.621.081-.514.38-.473.624.338-.122.581-.041c.257.448.23.745.041.57-.513.338-.716.013-.878-.19s-.325.38-.5.244.351-.556.216-.759-.231.122-.54.434-.73.3-.581.447-.311.232-.392.489-.715.353-1.121.624c.541-.231.622-.082.987-.312s.756-.42.892-.325c.715-.326.932-.272,1.108-.122s-.3.271-.081.488c-.257-.041-.528-.2-.622-.028s-.257.366-.433.38-.365.339-.365.664a8.231,8.231,0,0,1-1.175,1.437c-.378.367-.027.448-.149.678s-.568.028-.715.122.081.664-.122.841,0,.42,0,.623-.527-.122-.568.081-.5.149-.635.2.27.379.514.569c-.339-.094-.676.258-1.095.448s-.244.57-.568.583-.23.529-.446.691-.163-.379-.5-.393-.311.231-.108.515-.311.069-.5.312-.73.122-.878.325.4.2.487.367-.487.081-.784.013-.216.38-.487.325-.608.231-.418.421a.657.657,0,0,0-.757.5c-.068.231.365.353.351.461.135.393-.04.61-.2.677s-.163.231,0,.434-.285.244-.069.555a.747.747,0,0,0,1.122-.094c-.081.271-.365.42-.311.664-.351-.394-.864-.041-.675.176s-.067.339-.067.542c.661-.3.9-.244,1-.013s-.23.054-.23.366-.2.041-.379.285.69.692.96.759.527.367,1.067.285a4.714,4.714,0,0,0,1.7-1.261c.136-.176.433.028.635-.135s.081-.583.231-.664.229.447.365.5.211.145.215.416a1.173,1.173,0,0,0,.406,1.008c.3.244.068.611.325.949s.175.584.458.828.311.379.19.691.244.231.257.42-.081.583.013.773.284,0,.716-.013.325-.284.338-.542a.822.822,0,0,1,1.04-.366c.311.135.472-.1.527-.42.419.2.7-.367.837-.733-.635.407-.459-.3-.337-.583a8.093,8.093,0,0,0,.149-1.3.627.627,0,0,1,.513-.556c.391-.082.906-.57.825-.773s.54-.542.54-.746-.649-.827-.865-.962-.689-.028-.649-.176a4.534,4.534,0,0,0-.108-1.031c-.054-.3.337-.61.337-.895s-.013-.61.243-.705.1-.338.432-.42.271-.57.635-.718.391-.272.865-.5a4.205,4.205,0,0,0,1.405-1.058c.135-.285-.486-.584-.094-.882s.068-.637.351-.745a1.457,1.457,0,0,0,.594-.475c.2-.217.472-.013.959-.1a3.248,3.248,0,0,1,1.23.326c.365.163.311.42.325.705-.352.2-.554.325-.663.732a1.462,1.462,0,0,1-.933.922c-.311.027-.284.352-.54.42s-.5.216-.487.5-.377.312-.635.312-.2.46-.4.582-.162.285.028.529.027.461.093.637a1.2,1.2,0,0,1,.163,1.03c-.2.448-.419,1-.244.95s.582.366.852.339.3.379.554.3.256.245,1,.218S178.4-172,179-172a3.383,3.383,0,0,0,.819-.093,3.816,3.816,0,0,1,.438-.558,3.791,3.791,0,0,0-.436.557c.6-.246.747.283.963.46s.649.013.8.175a3.754,3.754,0,0,0-1.311.42c-.363.122-.327.251-.449.353-.592.2-1.443-.176-1.929-.082s-1.473.1-1.7.339-.811.312-.554.529,0,.325.189.583.284.366.541.312.459.081.189.366-.081.5-.094.922-.487.353-.743.353-.676-.773-.811-.949-.569.217-.879.406-.149.556-.365.733a.639.639,0,0,0-.135.868.925.925,0,0,1-.067,1.043,1.288,1.288,0,0,0,.189.394c.121.217-.487.244-.3.5-.432-.271-1.081-.135-1.053.041-.135.352-.3.475-.554.475-.392,0-.419-.394-.432-.569s-1.58.15-2,.569-1.392.257-1.418.489a2.418,2.418,0,0,0-.877-.2c-.352,0,.215-.353.08-.529s-.486.326-.811.217-.743.38-1.026.6-.69-.041-.473-.352c-.649-.041-1.041-.19-1-.488-.173-.406-.439-.563-.419-.705.662.257,1.081.285,1.122.081.025-.125-.068-.7-.324-.569-.514-.191-.23-.407-.163-.624s.513-.135.581-.312-.3-.366-.432-.434a.506.506,0,0,1-.028-.637.762.762,0,0,0,.1-.787c-.134-.135-.622,0-.662.366s-.432.2-.541.285.216.244.041.407-.243-.244-.527-.271-.311.434-.459.664a1.808,1.808,0,0,0,0,1.044c.053.325.446.529.351.8-.044.126.045.268.14.406.108.159.223.313.158.434-.122.231.068.448.243.786s-.378.15-.392.367-.513-.013-.675-.1-.7-.027-.689.109a7.552,7.552,0,0,1-1.175.312c-.406.082-.527.475-.379.637-.473-.19-.877-.041-.851.244s-.447.393-.419.746-.433.677-.73.854a2.577,2.577,0,0,1-.753.346c-.531.006-.815.264-.76.807s-.392.6-.947.637-.365.474-.594.651a1.1,1.1,0,0,1-1.149-.393c-.108-.3-.837,0-.527.353s.3.84.122.976-.554-.216-.8-.04-.257-.163-.554-.271-.419.135-.892.094-.743.231-.568.434-.027.393.108.569.757.149,1.217.393.568.041.8.218.284.067.3.407a.893.893,0,0,0,.716.786c.446.122.108.42.243.718s-.2.732-.134,1.1a2.917,2.917,0,0,1-.432,1.653c-.328.064-1.116-.226-1.635-.163-.554.069-2.324-.081-3.013-.026s-.73-.285-1.108-.285-.216.46-.757.474-.594.353-.2.665c.224.178.2.553.165.9a1.229,1.229,0,0,0,.025.622,3.64,3.64,0,0,1-.568,2.2c-.352.407-.013.515.352.8s.121,1.315.121,1.559.325.176.7.176a4.841,4.841,0,0,0,.73-.144c.864.212,1.083,1.157,1.594,1.093a.7.7,0,0,1,.744-.325c.216,0,.324-.312.837-.326s.838-.054,1.162-.041.581-.1.662-.325a.865.865,0,0,1,.716-.488c.365-.054.311-.434.337-.651s.635-.543.676-.706-.351-.786.013-1.342.756-.582.756-.895c0-.286.378-.393.838-.447s.608-.367,1-.529a.611.611,0,0,0,.379-.767.814.814,0,0,1,.7-1.145,3.757,3.757,0,0,1,1.676.366c.256.163.608.122,1.054-.352a1.21,1.21,0,0,1,.573-.375c.724-.276.6-.534,1.075-.669a1.392,1.392,0,0,1,1.284.542c.189.285.244.312.284.543a1.76,1.76,0,0,0,.865,1.111c.649.421.906.895,1.243,1.071s.676.136.878.38a2.114,2.114,0,0,0,.8.529c.324.15.338.5.648.542s.109.312.3.542a.908.908,0,0,1,.041.99c-.2.272-.1.733.04.733s.419-.489.459-.759.311-.258.527-.542-.324-.353-.418-.719.406-.691.877-.393.663.5.69.041-1.459-1.071-1.81-1.287-.122-.57-.676-.543-1.216-.664-1.418-1.464-1.068-.84-1.284-1.315.2-.529.014-.922c-.106-.219.128-.411.4-.522a.944.944,0,0,1,.584-.074c.188.458.176.664.324.664.243,0,.69-.028.7.3a3.612,3.612,0,0,0,.811,1.288c.215.245.7.191.73.393s.378.393.784.42a3.694,3.694,0,0,1,.853.508,4.792,4.792,0,0,0,.647.482c.4.215.542.351.3.6a1.237,1.237,0,0,0-.027,1.356c.27.219.347.655.609.78a.787.787,0,0,1,.526.807c-.04.339.432.461.649.217s.824.135.824.3-.621-.176-.973.081.271.5.19.773a.524.524,0,0,0,.473.637c.311-.013.662.5.852.407s-.23-.814-.162-.922.446.191.634-.027-.134-.38-.418-.367a1.74,1.74,0,0,0,.986-.257c.162-.027.2-.61-.3-.745s-.433.366-.757.027.3-.2.3-.488-.5-.692-.744-1.031.338-.5.473-.257.5.2.73.109-.243-.529.175-.692.419.122.554.176.256-.339.69-.339a1.11,1.11,0,0,1,.617.295.982.982,0,0,0,.531.262c.379,0,.527-.407.852-.529s1.054.041,1.23-.122-.46-.366-.689-.556a.93.93,0,0,1-.226-.476c-.275-.242-.5-.866-.315-.906s.432-.692.73-.786a1,1,0,0,0,.189-.678c.013-.285.176-.718.46-.746s.513-.027.472-.5.054-.444.433-.732.432-.855.784-.922a2.05,2.05,0,0,1,1.014-.15c.513.081-.256.407.094.6s1.433-.053,1.486.217-1.243.543-1.215.678.689.271.919.419-.068.57.04.706.459.027.743-.177.513-.135.878-.379,1.121-.027,1.216-.175-.216-.3-.919-.245a.678.678,0,0,1-.743-.746,2.028,2.028,0,0,1,1.149-.732,3.4,3.4,0,0,0,1.162-.353,3.579,3.579,0,0,1,.743-.209c.437-.085.884-.118.932-.021.081.163-.946.6-1.135.664s.365.353.352.515-.594.2-.541.529-.189.394-.5.394c-.094.244-.109.651.473.8a4.093,4.093,0,0,1,1.7,1.234c.771.5,1.544.417,1.649.977.121.651.486.393.351.949a2.445,2.445,0,0,1-1.905.881,6.457,6.457,0,0,0-1.595.041c-.527,0-.675-.38-1.081-.353s-.4-.367-.811-.367-.094-.2-1.364-.366a3.78,3.78,0,0,0-2.771.855c-.4.352-1.864.013-2,.109s.027.514-.46.705-1.554,0-1.918.162-.5.705-.189.678c.284.393.635.773.459.936a.419.419,0,0,0,.028.637c.216.163.256.461,0,.5s.446.339.459.474.594.2.594.366a1.1,1.1,0,0,1,1.027.718c.175.272,1.175.082,1.175-.216s.3-.38.743-.339,1.028.651,1.244.732.661-.163.945-.163.69-.447.852-.542.446.312.7.176.54-.285.7-.19-.392.515-.243.733c-.017.478-.083.652.013.773.143.179-.029.39-.071.678a5.785,5.785,0,0,1-.688,1.5,1.709,1.709,0,0,0-.146.429,5.724,5.724,0,0,1-.722,1.632c-.211.253-.657-.019-1.075.09a1.552,1.552,0,0,1-1.15-.244,2.609,2.609,0,0,0-1.905.312c-.175.258-.621.258-1.027.1a5.436,5.436,0,0,0-1.675-.474,2.688,2.688,0,0,1-1.38-.331c-.093-.225-.458-.239-1.255-.361s-.5-.664-1.393-.718-2.027.664-2.04,1.043.419.8.122,1.194a.958.958,0,0,1-1.406.013,2.592,2.592,0,0,0-1.688-.61c-.554,0-.947-.353-.906-.651s-.135-.434-.594-.529-.852-.475-1.662-.339a1.484,1.484,0,0,1-1.054-.221c-.219-.142-.352-.307-.352-.389,0-.176-.243-.475-.378-.312s-.649.028-.716-.312.337-.326.716-.637a.8.8,0,0,0,.027-1.234c-.406-.326-.122-.5.162-.8-.271-.19-.513-.15-.553-.474s-.919-.38-1.256-.069a2.727,2.727,0,0,1-1.352-.027,5.41,5.41,0,0,0-.933.1c-.3.013-1.027.488-1.27.257s-2.73.176-3.432.2-1,.759-1.419.759a2.354,2.354,0,0,0-1.432.746,3.385,3.385,0,0,1-1.406-.1c-.473-.013-1.2.231-1.554-.163s-.595-.515-.852-.393-.73,1.478-1,1.87a2.075,2.075,0,0,1-1.392.665c-.365,0-.406.556-.69.786s-.175.6-.513.868-.175,1.1,0,1.4-.621,1.233-1.08,1.5-.609.787-1.338.908a1.24,1.24,0,0,0-.661.326,2.164,2.164,0,0,0-.5.841c-.162.433-1.175,1.07-1.216,1.681s-.987,1.559-1.608,2.86a2.572,2.572,0,0,0-.269.864c-.052.59.307.8.512,1.035.284.325-.215.895.2,1.477s-.094,1.479-.3,1.8a2.21,2.21,0,0,0-.156.8,1.646,1.646,0,0,1-.209.734c-.3.448.122,1.1.338,1.3a2.081,2.081,0,0,1-.064.726.512.512,0,0,0,.1.427c.324.4.354.545.825.677.527.15-.04.421.392.692.417.329.39.612.757.881a3.08,3.08,0,0,1,1.029,1.126c.35,1.083.552,1.233.863,1.49.141.118.415.291.731.492.382.241.827.523,1.188.8a12.032,12.032,0,0,0,2.135,1.342,17.2,17.2,0,0,0,2.92-.556,3.931,3.931,0,0,1,1.773.1c.368.107.61.231.685.249a8.62,8.62,0,0,0,1.77-.719c.368-.184.777-.3,1.057-.45a1.6,1.6,0,0,1,.7-.322,3.394,3.394,0,0,1,.61-.055c.291,0,.466-.385.626-.2.173.226.942.267,1.374.361a1.353,1.353,0,0,1,.866.936,1.194,1.194,0,0,0,.487.786c.2.109.7-.2.932-.2a3.24,3.24,0,0,0,1.216-.135c.266.067.393.31.527.5.189.272.553.068.7.15a1.345,1.345,0,0,1,.256.895c-.052.169-.275.6-.173.814a.4.4,0,0,1-.206.623c.1.375.068.491-.006.607-.278.315.128.478.2.653s-.513.122-.5.38a.752.752,0,0,1-.365.583c-.162.122.433.637.447.814s.148.338.662.84c.49.479.256.6.9,1.13a2.86,2.86,0,0,1,.879,1.044,4.531,4.531,0,0,1,.325,1.012,13.726,13.726,0,0,0,.824,2.007c.122.258-.148.488-.148.962s.513,1.342.567,1.926a1.777,1.777,0,0,1-.648,1.329,3.377,3.377,0,0,0-.662,1.762c0,.529-.487,1.044-.473,1.288a7.817,7.817,0,0,1-.121,1.234,2.223,2.223,0,0,0,.513,1.234,7.083,7.083,0,0,1,.892,1.871c.2.664.784,1.409.933,1.912s-.108,1.22.04,1.545A6.177,6.177,0,0,1,168-83.643c.081.556.121,1.735.622,2.224a4.1,4.1,0,0,1,.567.732,6.4,6.4,0,0,1,.69,1.464c.216.718.743,1.4.877,1.816s.284.814,0,.855-.284.285.013.746.041.732.3.786a1.737,1.737,0,0,1,.864.623.375.375,0,0,0,.6-.04c.149-.217.608-.285,1.08-.285s.379-.2.838-.339a2.485,2.485,0,0,1,1.405-.013.966.966,0,0,0,.879-.109c.189-.122.553.191.58-.122s.406-.257.757-.257a4.423,4.423,0,0,0,1.878-1.194,17.227,17.227,0,0,0,2.176-2.67,6.909,6.909,0,0,1,1.31-1.464,3.23,3.23,0,0,0,.431-1.51c.022-.185.036-.346.043-.457.027-.434-.271-.081-.365-.353s.662-.773,1.432-1.057,1.068-.448,1.149-.719-.013-1.03.1-1.329-.068-.474-.162-1.152-.339-.786-.446-1.166-.082-.677.148-.692.229-.122.419-.488.406-.216.771-.488.378-.611.958-1.058,1.216-.434,1.784-.773,1.54-1.668,1.446-1.912a6.292,6.292,0,0,1-.231-1.789c.054-.448-.081-1.627-.081-2.2-.029-.556-.621-.324-.649-.868s-.351-.556-.337-.936.041-.718-.1-.759-.053-.366.163-.691-.392-.367-.487-.774a4.369,4.369,0,0,1,.4-1.393,19.274,19.274,0,0,1,.894-2c.2-.312.4-.257.581-.475s.23.109.5-.326c.435-.591,1.4-1.513,2.108-2.264a4.784,4.784,0,0,1,1.594-1.22,10.893,10.893,0,0,0,2.271-2.237,5.222,5.222,0,0,0,1.054-1.7,3.945,3.945,0,0,1,.824-1.423,5.076,5.076,0,0,0,.851-1.817c-.013-.326.271-1.018.312-1.6s-.446-.637-.6-.312-1.31.543-2.054.556a2.153,2.153,0,0,0-1.459.338c-.271.258-.946-.067-1.189.218s-1.2.528-1.514-.123a1.152,1.152,0,0,0-.469-.523c-.227-.133-.435-.155-.49-.209-.094-.1.271-.366.527-.421s.135-.352-.081-.542a10.231,10.231,0,0,1-1.095-1.206,2.384,2.384,0,0,0-1.446-1c-.324,0-.378-.556-.581-.583s-.661-.827-.675-1.342a2.052,2.052,0,0,0-.513-1.019,2.076,2.076,0,0,0-.568-.526c-.325-.149-.541-.718-.541-1.437a8.138,8.138,0,0,0-.2-1.519,1.732,1.732,0,0,0-.8-.95.956.956,0,0,1-.51-.688c.064-.8-.233-.775-.422-1.386s-.947-1.518-.974-1.87-.446-.556-.432-.936-.2-.42-.621-1.017a2.431,2.431,0,0,1-.419-1.681c.121-.04.472.881.608,1.18s.594,1.207.919,1.207.446-1.369.554-1.3c.085.232-.009,1.023.175,1.084.2.068.311.434.743.909a7.5,7.5,0,0,1,1.324,2.06,1.289,1.289,0,0,0,.7,1.017c.54.367.54.814.824,1.031s.216.475.23,1.018a1.943,1.943,0,0,0,.744,1.545,2.318,2.318,0,0,1,1.054,1.206,4.245,4.245,0,0,0,.837,1.4c.311.312.135.474.311.705a2.519,2.519,0,0,1,.3.532.877.877,0,0,1,.077.565,2.072,2.072,0,0,0,.271,1.464c.283.42.175,1.193.31,1.342a2.235,2.235,0,0,0,1.662-.191,1.911,1.911,0,0,1,1.176-.366,1.624,1.624,0,0,0,1-.488c.122-.163.676-.176.906-.149s.459-.231.715-.488a7.415,7.415,0,0,1,1.933-.637c.865-.272.675-.678.878-.922.169-.2.408-.145.781-.3a4.581,4.581,0,0,1,1.718-.369c.392-.109.013-.434.352-.719s.824-.067,1-.162.3-.718.6-.84.621-.041.581-.3.027-1.18.311-1.234.73-.353.743-.515a10.48,10.48,0,0,1,.757-1.07c.175-.3.189-.461-.068-.5s-.662-.759-.77-.962-.893-.069-1.528-.57a1.763,1.763,0,0,1-.492-.974c-.133-.565-.154-1.133-.25-1.141-.163-.013-.825.705-1.1,1.234a1.739,1.739,0,0,1-1.729.814,1.136,1.136,0,0,0-1.082.285,1,1,0,0,1-.571-.64c.194-.553.3-1.327-.09-1.435s-.609.678-.609.9c-.245-.111-.719-.788-.554-.977.2-.23-.107-.718-.4-.99s-.9-.773-.933-1.084a1.747,1.747,0,0,0-.115-.389,9.351,9.351,0,0,1-.439-1.156.846.846,0,0,1,.481-.368c.465-.038.452-.309.641-.147s.446-.013.635-.027.7.962.933,1.437.215.637.527.84.662.1,1.108.556a4.02,4.02,0,0,0,2.08.8c.487.028.852-.529,1.474-.407s.472.922.7,1.207,2.757.475,3.189.6a5.152,5.152,0,0,0,.957.083,5.405,5.405,0,0,0,1.7-.124.615.615,0,0,1,.7-.109,2.184,2.184,0,0,0,1.473-.013c.444-.247.716,0,.73.217s.216.312.419.5.054.407.19.624.4.176.8.353c.418.306.532.693.986.868.527.2,1-.339,1,.054s-1.243.312-1.27.434,1.283,1.708,1.946,1.586,1.148-.84.958-.95.109-.555.284-.474.028.786.23.949.135.46,0,.84.135,1.125.176,1.546.324,1.03.419,1.653a9.693,9.693,0,0,0,.851,2.454c.365.692.649,2.048.892,2.372a4.44,4.44,0,0,1,.865,1.926,2.8,2.8,0,0,0,.893,1.626c.23.163.73-.19.851-.57s.811-.528.852-.854.108-.583.351-.623.244-.3.244-.651a1.981,1.981,0,0,1,.271-1.166,1.982,1.982,0,0,0,.135-1.491,1.621,1.621,0,0,1,.067-1.153c.135-.339.081-.733.338-.759a1.5,1.5,0,0,0,.906-.624,9.4,9.4,0,0,1,1.391-1.111,9.048,9.048,0,0,0,1.474-1.492c.27-.447,1.04-.6,1.392-.962s.216-.556.284-.949,1.2-.556,1.635-.556c.482-.071.6-.191.838-.191.3,0,.7-.04.73-.353s.365-.542.553-.448a2.226,2.226,0,0,1,.487,1.248,1.24,1.24,0,0,0,.142.463,1.905,1.905,0,0,0,.857.906c.528.217.879,1.288,1.041,1.857a2.027,2.027,0,0,1-.135,1.479c-.19.325.068.339.378.5s.662.217.892-.109.7-.556.771-.921.284.176.474.366a1.691,1.691,0,0,1,.365,1.017c.04.461.081,1.613.472,1.98a1.664,1.664,0,0,1,.352,1.45c-.108.285.2.773.121,1.085-.129.644-.223,1.263-.311,1.6-.108.42-.189.786.054.814s.73.582,1.2,1.18a2.139,2.139,0,0,1,.274.453,3.589,3.589,0,0,1,.253,1.4c.014.541.812,1.409.932,1.762s.352.461.878.841,1.555.989,1.757.895-.31-.99-.608-1.3-.027-1.153-.013-1.764-.568-.542-.7-.961-.365-.177-.446-.448a1.687,1.687,0,0,0-1.122-.746c-.459-.041-.676-.733-.635-1.043s-.337-.584-.337-.855-.27-.285-.581-.434.067-1.071.108-1.464.689-1.519.5-1.871.662-.623.771-.231.148.583.689.556.54.393.973.516c.408.18.273.611.311.854s.379.108.568.094-.122.3.041.489.635-.163.73.068a1.289,1.289,0,0,0,.486.447c.217.136-.27.367-.256.8s.337.542.459.366a2.7,2.7,0,0,1,.825-.637c.2-.068,0-.366.216-.353s.149-.312.243-.488.243-.109.568-.094a2.844,2.844,0,0,0,1.243-.6c.459-.3.54-.366.715-1.22a5.956,5.956,0,0,0-.215-2.129c-.013-.258-.635-1.451-.865-1.438s-1.284-1.071-1.474-1.247-.134-.474-.4-.705a1.526,1.526,0,0,1-.23-1.247c.068-.421.662-.515.649-.8s.053-.529.351-.542a1,1,0,0,0,.716-.475c.253-.153.567-.009.635-.216.622.23.756.271,1.027.027s.406.244.244.38-.054.555.2.8.3-.149.244-.394.432-.488,1.283-.773a4.506,4.506,0,0,0,1.784-1.044c.013-.135.608.245.891.028a4.372,4.372,0,0,1,1.581-.258c.271-.013.256-.244.54-.474s.216-.34.54-.434a.728.728,0,0,0,.527-.556c0-.162.609-.216.622-.393s.459-.231.459-.447.271-.177.392-.34-.1-.637.122-.7-.081-.326-.122-.448.406-.15.635-.3a.929.929,0,0,0,.419-.637c.041-.257.419-.488.594-.556s.244-.433.19-.745a.852.852,0,0,1,.54-.908c-.553.027-.743-.5-.9-.3-.028-.257.432-.6.635-.664s-.3-.515-.554-.5-.54-.6-.811-.6c.825.135,1.189.272,1.324.135s-.527-.677-.77-.868-.014-.447-.162-.556a4,4,0,0,1-.582-1.112c-.108-.312-.676-.366-.811-.57s.014-.678.432-.854.244-.529.433-.488.351-.041.5-.353.406-.122.554-.284.811-.15,1.04-.312-.216-.665-.528-.584a.826.826,0,0,1-.892-.366c-.216-.325-.783.6-1.216.8s-.715-.366-.567-.732-.338-.353-.946-.326-.378-1.085-.013-1.139.9.338,1.135-.339.553-.15,1.067-.746,1.108-.962,1.554-.61-.472.909-.621,1.247.134.448-.135.705.108.325.634-.013a11.291,11.291,0,0,1,1.69-.949,1.762,1.762,0,0,1,1.486.461c.257.325-.3.691-.541.989s.149.312.163.556.338.447.46.231.324-.136.7-.136c.319.3.3.591.5.61a.2.2,0,1,1-.053.394c-.311-.068-.311.42-.04.841s-.514.895-.3,1.111.04.475.134.611a2.246,2.246,0,0,0,1.743-.57c.5-.515.635-.447.892-.379s.514-.19.378-.393a2.393,2.393,0,0,1-.243-1.329c.024-.362-.469-1.018-.946-1.54a5.623,5.623,0,0,0-.811-.764c-.31-.191-.122-.719.256-.814a10.8,10.8,0,0,0,1.6-.977c.284-.162.094-.691.324-1.112a4.872,4.872,0,0,1,1.017-.989,2.8,2.8,0,0,1,.982-.583c.339,0,.676.582,1.055.6a5.688,5.688,0,0,0,2.108-1.328,11.976,11.976,0,0,1,1.486-1.654,7.534,7.534,0,0,0,1.338-1.8,15.206,15.206,0,0,1,.973-1.3,5.109,5.109,0,0,0,.568-.936,16.76,16.76,0,0,0,.391-2.414c.1-.108.04-.393.176-.569s.067-.42.337-.651a.468.468,0,0,0,.149-.611c-.068-.175.013-.569-.054-.691.27-.366,0-.611-.23-.718s-.527-.2-.554-.461a.761.761,0,0,0-.717-.542c-.3.027-.851-.163-.783.027a2.25,2.25,0,0,0-.568.665c-.229-.217-.608-.231-.554-.5-.337-.19-.337.231-.593.285s-.176-.732-.108-.936-.474.013-1.041-.028-.418-.434.041-.678.379-.474.608-.57.825-.488,1.176-.692a1.023,1.023,0,0,0,.5-.664c.081-.231.73-.515,1.31-.989a3.531,3.531,0,0,0,1-1.031c.134-.285,1-.637,1.013-.855s1.027-.758,1.717-.895a3.364,3.364,0,0,1,1.986.244,2.94,2.94,0,0,1,1.324-.027c.459.054.568-.217.878-.122s.568.149.757-.217,1.082-.3,1.284-.149.365.352.69.135.324.285.634.326c-.431.257-.771.419-.459.6s.675-.163.919-.136a1.419,1.419,0,0,0,.958-.163c.338-.216.433.177.649-.013a1.593,1.593,0,0,1,.947-.231c-.771-.285-.757-.5-.432-1.058a5.2,5.2,0,0,1,1.338-1.193c.391-.338.675-.175.675-.393s.189-.826.487-.84a3.33,3.33,0,0,0,1.5-.136c.459-.257.418.19.608.258s.446-.393.662-.258-.325.461-.446.854.284.244.513.353-.3.271-.243.379.513.109,1.108-.489a1.95,1.95,0,0,1,1.513-.718c.379.041.162-.339.19-.895s1.189-.719,1.568-.556a.946.946,0,0,0-.7.908c.013.461-.325.61-.149.787s-.257.216-.271.407,0,.338-.27.42-1.175.175-1.2.529-.514.393-.744.826-1.108.692-1.688,1.56-1.5.868-1.5,1.031-.635.149-.851.175.2.556-.311,1.113a3.1,3.1,0,0,0-.838,2.1,14.5,14.5,0,0,0,.5,3.39c.23.393.094,1.356.283,1.559s.122.542.244.664.621-.542.959-.827.23-.379.459-.529.135-.773.2-.936.487-.244.621-.419.487-.069.676-.136-.014-.515-.081-.773.553-.611.877-.84.73.149,1.094-.191-.026-.732-.162-.908.365-1.031.649-1.112.432.2.7-.041-.243-.637-.432-.61-.256-.692.189-1.03.27-.407-.027-.489-.352.028-.581.041-.459-.474-.108-.949.689-.42.77-.814a4.547,4.547,0,0,1,.689-1.153c.121-.2.608,0,.8-.04.581-.041.959-.718,1.27-.718s.109.5.189.8.256-.081.852-.488a3.108,3.108,0,0,1,2.283-.176c.392.19.459.637.675.583.329-.082.054-.448.378-.542a5.644,5.644,0,0,0,1.324-.746c.433-.312.311-.081.541-.366s.459-.163.527-.353a2.733,2.733,0,0,1,1.54-.692c.852-.19,1.959-.759,1.905-.936.406.1.73.028,1.175.122s.649.272,1-.081-.04-.475-.027-.745-.609-.556-.528-.841-.459-1.044-.621-.895-.541-.122-.541-.339c-.54-.149-.973-.231-1.054-.475s.5-.42.906-.257.283.326.486.448a1.482,1.482,0,0,0,1.04-.069c.284-.135,1.081-.394,1.216-.623s-.013-.339.257-.474.067-.42-.163-.542a.232.232,0,0,1,.068-.448c.5-.312.527-.176.825-.326s.013.231-.122.489.284.474.325.623.621.2.945.028a1.63,1.63,0,0,1,1.433.474,1.163,1.163,0,0,0,.649.787c.432.217.824.122.9.326a.39.39,0,0,0,.487.257c.73-.109.824.15,1.054-.054s-.5-.339-.406-.5c.649.1.392-.3.54-.338s.028-.855-.134-.909A5.973,5.973,0,0,0,327.051-178.85ZM283.7-156.086c.216.434-.352,2.354-.162,2.576.324.38.108-.515.594-.6s.486.542.784.677.108-.868-.162-.814-.487-.651-.622-1.084.271-.949.271-1.491.675-.515,1.081-.109.459.135.3-.163-.676-2.467-.974-3.254.432-1.545-.108-1.952-.325-1.247-.594-1.084,0,.895-.432.949-.028.46-.19,1a3.029,3.029,0,0,0,.3,1.816C284-159.123,283.487-156.519,283.7-156.086Zm-77.265-49.542c-.54,0-.822.306-.54.542a2.341,2.341,0,0,0,2-.163c.244-.325.866-.054.973-.379s-1.838-.461-1.757-.244S206.98-205.628,206.439-205.628Zm85.535,10.792c.027-.271-1.135-.677-1.487-.461s-.621-.353-1.054-.216-1.027.108-1.244-.272-.945.6-.621.623c.649.055.973.678,2.217.759S291.946-194.564,291.973-194.835Zm-11.864.3c.215.217,1.027-.109,1.351-.217s.351.488.865.163,1.027-.163,1.622-.163-.109-.732-.082-1.058.7-.108.487.163.325.895,1.189.84.216-.6.649-.786.378-.407-.243-.786-1.433-.136-1.974-.38c-.577-.26-1.27-.272-1.3.326s-1.162-.651-1.756-.841-2.435,1.694-1.54,2.143A2.4,2.4,0,0,1,280.109-194.537Zm-77.616-10.847c.244.081,1.135.3,1.135-.135S202.221-205.475,202.493-205.384Zm-2.135,20.527c.351-.053-.216-.434-.811-.6s-1.443.437-.892.949C199.386-183.826,200.008-184.8,200.358-184.857Zm46.563-16.107c.812.028,3.082-.624,3.163-1.058s-.837-.407-1.189-.786-1.135-.054-1.325.271-.4.028.109-.488-.513-.922-.54-.6-.973.054-.973.353-.351.434-.325.732-.649-.162-.675.515-1.047,1.074-.649,1.3C244.9-200.5,246.111-200.99,246.922-200.964Zm-39.051-6.725c.433.054,1,.027.784-.244s-1.783-.163-1.621.054-1.271.135-1.244.216c.055.163.541.326,1.19.326S207.439-207.743,207.871-207.689Zm-9.053,1.22c.109-.271-1.162-.352-1.621-.108s-1.535.048-1.405.353a1.047,1.047,0,0,0,1.486.054C197.9-206.74,198.71-206.2,198.818-206.469Zm8.621-.352c.081-.57-.864-.109-1.567-.407s-1.117-.276-.649.135c.216.19-1.2.338-.974.57C204.764-206.007,207.358-206.251,207.439-206.821ZM282-193.1c.324.11.865.054.865-.353S281.393-193.3,282-193.1Zm-77.778.922c.054.407-.837.135-.811.407s-.135.461-.649.461.244.325.3.623-.513.081-.54.543-1,0-1.135.6.486.515.918.543-.162.434.162.678.568.163.351-.3,1.135.163.73.515.649.624,1.162.651,2.336.426,2.378,0c.028-.271-.675-.515-1.242-1.112s-.974-1.572-.325-1.979.081-.6.73-1.058.27-.895.811-.95-.053-.542.487-.623a.728.728,0,0,0,.568-.895c-.081-.217.567.028.864-.3s1-.109,1.216-.57,3.324-1.519,5.081-1.926,2.973-1.139,2.351-1.626-2.378.19-2.811.542-1.054.109-1.486.353a2.131,2.131,0,0,1-1.81.163c-.46-.3-1,.353-1.352.325s-.756.353-1.135.326-1.136.3-1.19.515-.7.162-.7.434a.5.5,0,0,1-.784.271c-.27-.244-.594.271-.215.624s-.7.38-.514.6-.4.353-.27.6-.379.326-.784.407-.622.624-.108.651S204.169-192.585,204.223-192.178Zm79.616-.624c-.838-.135-1.617.556-1.514.706.244.353,2.216.542,2.7.434S284.677-192.666,283.839-192.8ZM197.71-205.465c.162.325,1.513.353,1.513.081s.7-.028.73-.272.325-.515,1.081-.569.757-.326.054-.652-1.648.191-1.27.462-1.055.19-1.243.46S197.553-205.78,197.71-205.465Zm40.97.515c-.54,0-1.005.182-.649.325.27.109.243.407.811.542s1.136-.325,1.081-.651,1.973-.623,2.513-.759-.351-.705.244-.758.35-.326-.379-.434-.432-.732-.675-.949-.378.271-1.324.461-1.406.434-1.027.623,0,.651-.4.624-.487.407.026.623S239.22-204.949,238.68-204.949Zm-1.7-2.115c.163.135,1.108.244,1.216-.163S236.507-207.457,236.977-207.065Zm2.73,3.335c.216.19.4.135.675.19s.406.733.892.624,1.811.542,2.595.542.865-.651.621-.678-.027-.406.406-1.03-1.352-1.084-1.352-.6-.513-.109-.675-.407-2.54.244-2.54.542S239.459-203.947,239.707-203.73Zm79.318,16.135c.432.3,1.487-.135,1.919-.217s.217-.623-1-.786-2.8.739-2.217,1.03C318.268-187.3,318.592-187.893,319.025-187.595Zm-92.209-3.444c.432.216.756.135.7-.3S226.472-191.211,226.816-191.038Zm-15.485-15.837c-.054-.244-1.568-.3-1.487-.026s-1.046.566-.7.84c.648.515,2.4-.081,2.594-.325S211.384-206.631,211.331-206.876Zm2.837-.433c-.54-.109-.621.325-.892.3s-1.291.172-1.081.407c.244.272,1,.135,1.514.082C214.734-206.631,214.709-207.2,214.168-207.309Zm6.162,15.537c.108-.19-.378-.407-1-.407s-.709.685-.4.733A2.414,2.414,0,0,0,220.33-191.771Zm97.938,99.64c0-.346-1.29.385-.953.508C317.539-91.541,318.268-91.785,318.268-92.131Zm-1.156,1.3c.021-.59-1.361-.005-1.054.285C316.4-90.219,317.092-90.24,317.112-90.829Zm-1.885,20.154a.522.522,0,0,1-.547-.549c0-.3-.081-.752-.406-.732s.1.345-.019.508-.2-.183-.365-.183-.345-.223-.345-.63-.344-.366-.344-.833-.73-.834-1.135-.834.081.732.283.976.649.468.629.652a1.071,1.071,0,0,0,.547.732c.243.081-.142.793-.142,1.363s-.446.467-.75.833.771.733,1.217,1.1-.382,1.266-.263,1.464c.061.1.365.244.831.122s.689-1.14,1.014-1.424.121-.733.284-.956.384-.2.608-.2.1-.548.386-.548.141-.386.3-.814-.709-.264-.892.04S315.572-70.675,315.228-70.675ZM307.3-60.71c-.264-.325-.68.311-.345.407C307.1-60.262,307.566-60.384,307.3-60.71Zm4.783-6.386c-.3.142-.506-.671-.892-.366s-.04.426-.466.793-.243.488-.75,1.281-2.25,1.24-2.513,1.667-1.135.773-1.155,1.1-.552.558-.244,1c.244.345.568.1.831.366s.527.041.649.264,1.014.224,1.683-.386.344-.895.608-1.058.3-.651.466-.955a.928.928,0,0,1,1.014-.631c.73,0,.344-.142.3-.488s.609-.407.609-.854.892-.855.709-1.2.162-.549-.122-.753S312.39-67.238,312.086-67.1ZM293.7-81.616c-.142.1-.142-1.018-.041-1.526s.041-.447-.222-.183-.547-.509-.609-.712-.365-.773-.709-.692-.121-.488-.446-.427-.385-.467-.324-.955-.223-.1-.365-.305-.3-.041-.528.041-.283-.427-.223-.63-.041-.448-.344-.671a.633.633,0,0,1-.3-.671c.021-.264-1.723-1.159-2.108-1.241s-.061-.488-.223-.63a1.969,1.969,0,0,1-.222-1.118c0-.448-.568-.59-.547-.956s-.162-.712-.122-1.119-.587-.508-.608-.732-.365-.021-.709.02-.325-.448-.284-.915a2.105,2.105,0,0,0-.426-1.464c-.283-.223-.3-1-.446-1.118s-.608.406-.587.67a.915.915,0,0,1-.223.733c-.182.162.122.793-.121,1.017s-.02,1.118-.081,1.627a3.277,3.277,0,0,1-.284,1.4c-.244.345-.284.895-.771,1.078s-1.135-.2-1.115-.468-.527-.426-.811-.386-.446-.366-.892-.711-.79.081-.933-.326-.284-.467-.608-.692-.223-.223.081-.447.243-.508.081-.773.182-.2.588-.427,0-.488.3-.61.122-.386-.2-.448-.222.325-.344.366-.243-.508-.344-.488-.487.549-.689.285a4.4,4.4,0,0,0-1.784-.549c-.446-.061-.587-.63-.852-.529s.041.285.345.61-1.014.549-1.4.427.06.285-.263.264-.385.549-.649.834-.081.488-.365.671-.3.386.04.773-.162.407-.465.1-.609-.305-.588.041-.365.182-.3-.2-.425-.2-.506-.426a1.058,1.058,0,0,0-.771-.57c-.263.02-.263.305-.527.305s-.324.142-.284.426-.4-.02-.709.02,0,.386-.162.407-.162.305-.425.305-.223.589-.182.895-.406-.142-.669-.061.061.346.141.692-.141.326-.284.467-.365-.386-.365-.691-.344-.02-.709.366.122.976-.04,1.078a10.509,10.509,0,0,0-1.318,1.3c-.425.508-1.338.2-1.621.447s-.588.061-.872.285-.811.651-.871.386-.79-.061-1.094.264a2,2,0,0,1-1.135.63c-.344.02-.344.549-.486.671s-.1-.426-.1-.569-.325.244-.466.671.344.589.04,1.037-.587.895-.162,1.464.669.935.528,1.22-.447-.569-.548-.467.385.467.264.651-.559-.693-.649-.488c-.082.182.912,1.565.933,2.074s.811,1,.77,1.728a4.776,4.776,0,0,0,.811,2.1c.122.183-.284.67-.2,1.22s-.182.753-.527.753-.142.569.244.61.243.305.668.589a3.94,3.94,0,0,0,1.784.183c.344,0,.446-.529.912-.549s.425-.163.649-.447,1.277-.2,2.351-.142,1.54-.264,1.7-.712c.139-.382.912-.407,1.216-.692s.568-.3,1.358-.264a4.777,4.777,0,0,0,2.027-.589,15.949,15.949,0,0,1,1.925-.244c.486-.122.567.61,1.114.549s.791.162,1.074.142.244.2.528.264.243.305.061.57.425.244.811.773.021.611.223,1.017.345.305.75-.264.851-.2.912-.691.486-1.058.77-.814-.2.366-.385,1.3-.506.448-.567.711.851.407.851-.081.163-.711.507-.264-.2.814-.122,1.017.466-.061.669-.04c.36.036.851.833.77,1.261s-.2.834.487,1.18.425.407.932.407a4.233,4.233,0,0,1,1.844.651c.284.244,1.014-.183,1.156-.671s.668-.02.385.142.142.549.162.285.142-.488.243-.183.466.305.608.549.3.427.3.223.081-.386.406-.508a3.211,3.211,0,0,0,.871-.63,5.119,5.119,0,0,1,1.905-.345c.142,0,.223-1.221.3-1.851s.608-.733.689-1.4a4.406,4.406,0,0,1,.974-1.973.746.746,0,0,0,.547-.631c.021-.386.486-.813.486-1.281s.264-1.017.223-1.159a.911.911,0,0,1,.1-.915c.3-.325-.122-.712.04-.834S293.844-81.718,293.7-81.616Zm-14.432,8.683c.122-.285-1.295-.04-1.094.142C278.4-72.586,279.149-72.648,279.271-72.933Zm6.507,5.349c-.223.061.709,1.464.426,1.829s.831,1.363,1.216,1.424.243-.386.506-.366.162-.265.2-.468.3.223.527.1-.061-1,.263-1,.062-1.058-.04-1.4-.993.264-1.54.325S285.97-67.637,285.777-67.583ZM273.616-96.869c-.041-.244-1.483.038-1.176.285C272.643-96.423,273.656-96.626,273.616-96.869Zm27.058-1.4c.244-.142-1.015-.929-.932-.509A.773.773,0,0,0,300.674-98.273Zm-2.047-2.075c-.02.244,1.053.834,1.277.692S298.65-100.61,298.628-100.348Zm2.8,1.892c.122.02-.573-1.586-.73-1.241C300.492-99.249,301.3-98.476,301.425-98.456Zm.811.976c.263-.183-.9-.58-.831-.406C301.445-97.785,301.972-97.3,302.235-97.48Zm-5.965-3.613c.593-.379-1.082-1.573-1.135-1.329S295.948-100.887,296.271-101.093Zm1.364.441c.142-.1-.734-.815-.771-.63C296.844-101.181,297.492-100.551,297.635-100.652ZM216.947-57.438c.356.158.514-.2.752,0a.5.5,0,0,0,.791-.358c.079-.476-1.108-.4-1.226-.675S216.154-57.792,216.947-57.438ZM203.876-119.42c.031-.126-1.271-.176-.93.178C203.249-118.928,203.845-119.295,203.876-119.42Zm-5.22,23.1a.98.98,0,0,0-.135.651c.028.217-.324.434-.54.407s-.568.109-.459.407-.162.244-.028.488-.3.542-.675.569-.865.706-1.271.651-.811.272-1.162.218-.108.732-.378,1.22a1.9,1.9,0,0,0,.108,1.654,1.514,1.514,0,0,1-.215,1.87,2.089,2.089,0,0,0-.351,2.2c.243.543.243,1.356.594,1.735s1.324.705,1.621.407.61.041.946-.353a26.921,26.921,0,0,0,1.324-3.85,19.538,19.538,0,0,0,1-3.579c-.053-.38.325-.624.163-1.031s.053-.9.243-.57.459.326.54-.108-.324-1.113-.351-1.736-.568-1.221-.649-1.518C198.86-97.036,198.764-96.429,198.656-96.32Zm28.728-19.415a2.554,2.554,0,0,0-.054,1.22c.054.515,0,1.058.459,1.356.528.343,1.378-.542,1.406-1.3a3.612,3.612,0,0,0-1.487-2.142C227.465-116.576,227.519-116.089,227.384-115.735Zm63.833,13.314c-.675.272-1.9-.311-1.946.082-.027.244.757.677,1.487.677a2.856,2.856,0,0,0,1.891-.949c0-.216.46-.6.271-.813s-.594.108-.594.352S291.892-102.693,291.216-102.422Zm-2.676.543c-.378-.353-1.757-.488-1.811-1s-2.513-1.736-3.593-1.98c-.192-.044-.424-.114-.676-.2a30.235,30.235,0,0,0-3.135-1.1c-.4.027-.459.732-.811.732s-.838.733-1.486.95-.676-1.871-.974-2.278-1.919-.732-2.08-.272-.726.217-.784.6c-.054.352.135.244.486.244s.352.271.514.623,1.135.109,1.459.081.377.434-.082.272-.459.217-.783.135-.757-.053-.541.135.568.38.568.814.622.353.622,0,.324.109.946.272.19.407.811.434a6.465,6.465,0,0,1,2.567.895c.541.407.162.677.513,1.058s.459.813-.028.813-1,.489-.864.733,1.73-.109,2.108-.109c.247,0,.5.441.973.761a1.848,1.848,0,0,0,.973.324c1.189.053.892-.625,1.108-.625s.3-.379.541-.677,1.3-.054,1.918.434,1.352,1.926,2,1.79,1.325.379,1.919.353.054-.488-.135-.57-.675-.407-.649-.623-.54-.191-.918-.434-.243-1.03-.649-1.22-.7-.787-.216-.759S288.919-101.527,288.54-101.879Zm5-1.3c.514-.135.135-.651-.3-.922s-.811-.461-.27.054S293.222-103.1,293.54-103.18Zm-32.808-12.2c.162.3,1.162-1.194,1.649-1.546a.651.651,0,0,0,.243-.976c-.162-.325-.351.515-.73,1S260.613-115.6,260.732-115.383Zm3.7-3.688c.594-.19-.924-1.249-.865-.977C263.651-119.668,263.84-118.881,264.435-119.071Zm-1.135-2.494c.217,0,.379.271.243.705s.406.488.919.3.325.353.838.272,1.216.57,1.108.814.027,1.03.271.814.621.054.378.407.378.705.459,1.139.351.081.3-.244.054-.3.406-.542-.028-.651-.243-1.112-1.028-.3-1.028-.733-.594-.569-.621-.814-.811-.488-1.27-.216-.136-.488-.46-.841.243-.867.622-1.3-.109-1.165-.054-1.49.027-.434-.163-.326-.973-.325-1.323-.109-.028,2.007-.189,2.143-.372-.291-.433-.109C262.975-122.569,263.083-121.566,263.3-121.566Zm1.783,4.149c.136-.027.46,0,.487-.272s.325.489.081.733-.243.922.136,1,1.08-1.221.973-1.464-.432.163-.351-.163-.973-1.166-1.378-1.084S264.765-117.353,265.083-117.417Zm1.622,1.058c.109.271.892-.163.675-.434S266.624-116.563,266.7-116.36Zm1.054.515c-.053.406-.568.081-.54.406s-.54,0-.811-.189-.649.515-1.054.623-.62.972-.351.949c.325-.027.487-.461.811-.434s.217-.326.676-.244.135,1.464.757,1.572.649.488.945.488-.053-.867-.027-1.165.649-.028.972-.407-.216-1.383-.216-2.033-.892-.462-.649-.055S267.813-116.251,267.758-115.844Zm-12.863-10.44c-.053-.191-.783-.081-1.135-.081s-1.244.515-.892,1.246,1.514.244,1.54-.081S254.965-126.037,254.895-126.284Zm10.134-5.044c-.243-.325-1.324.19-1.621,1.275s.4,1.636.486,1.573C264.164-128.671,265.272-131,265.029-131.328Zm7.675-8.026c.109-.3.379.434.135.922s.031,1.175.352,1.111c.27-.053.622-1.03,1.027-1.546s-.19-.326-.19-.6-.594-.217-.621-.461-.432-.108-.838.19-.54.353-.378.652S272.6-139.056,272.7-139.354ZM276.3-141.9c-.621.244-1-.272-1.351.081a3.7,3.7,0,0,1-1.405,1.058c-.459.082-.195.64,0,.542.324-.162.837,0,1-.244a5,5,0,0,1,2.3-.57c.811-.027.324.38.378.814s.73.353,1.081-.053.622-.38.324-.625.054-.46.27-.135a.739.739,0,0,0,1.162-.081c.27-.434.351.081.675.054s.513-.84.541-.542.54.216.865-.135.027-.977.243-1.3a1.625,1.625,0,0,0,.216-1.41c-.216-.407.486-.678.837-1s-.4-1.952-.433-2.44-.892.19-1.161.325-.46.977-.163,1.221-.486.705-.459,1.22-.487.515-.568.895-.378.3-.837.651-.7-.054-.6-.3-.7.135-.675.732-.756.652-.568.922-.594.434-.568.19S276.92-142.147,276.3-141.9Zm-.108,2.3c.271.135.622-.407.622-.814s-.811-.407-.919-.109-.433.163-.865.245-.447,1.115-.135,1.22c.243.082.432.082.513-.244A.564.564,0,0,1,276.19-139.6Zm6.027-10.576c-.325.055.027.38-.352.543s-.351.434-.163.542.055.46,0,.705.244.054.46-.19.441.117.487-.109c.053-.271-.568-.407-.541-.678s.433.081.757-.081a1.463,1.463,0,0,1,1.378.325c.405.353.514.217.594-.216s.7-.624,1.324-.624.675-.3.486-.434,1.028-.922,1-1.14-.649.489-.838.244-.513.136-.918.217-1.676-.977-2-1.464-.864-.081-.594.272-.054.461-.054.949-.325.488-.27.814S282.541-150.228,282.217-150.174Zm44.213-25.516c.216.244,1.243.109,1.7.379s1.108.054,1.108-.163-1.486-.705-1.675-.57S326.18-175.973,326.43-175.691ZM165.138-202.564c-.122.386.608.732.912,1.017a1.349,1.349,0,0,0,1.3.081c.263-.162.182-.732.527-.711s.162-.305.446-.407.324.264.081.549.425.264.79-.082.447-.021.365.305-.831.142-1.094.508-1.075.081-1.439.488.324.427.83.326a6.326,6.326,0,0,1,1.824-.082c.365.082-.223.2-.831.2s-.811.183-.79.345-.851-.182-.891.183.811.508.912.732.668.02.892.1-.365.244-.446.345.628.244.75.447.628.1.608-.183a2.21,2.21,0,0,1,1.053-1.648c.609-.223.263-.426.345-.773s.567-.061.425-.345-.06-.407.324-.773.628-.1,1.094-.326.69.163.182.2c-.444.036-.223.549.142.692s.04.264.324.325.2.488-.162.874.1.468.871.183.284.244.507.467.831-.162,1.155-.548.81-.322.791-.529c-.02-.224-.365-.285-.649-.163s-.993.04-.75-.183.2-.407-.162-.366-1.014-.142-.71-.264-.222-.529-.506-.508-.2-.305-.182-.529-.811-.325-.649-.407-.344-.264-.466-.1a.2.2,0,0,1-.365-.122c0-.244-.608-.183-.851-.163s-.122-.529-.365-.712-.568.367-.75.326.141-.407.243-.651-.852-.57-.952-.326-.284-.366-.487-.426-.041.407-.223.447-.425.224-.121.427a2.5,2.5,0,0,1,.567,1.383c-.04.162-.973-.733-1.013-1.16s-.507-.773-.629-.467-.465.427-.365.732-.243.407-.243.163-.506-.529-.689-.549.466-.142.77-.285-.263-.345-.527-.183-.608-.1-.77.122-.365,0-.649-.061-.528.407-.73.326-.325.407,0,.915.567-.163.952-.081S165.26-202.95,165.138-202.564Zm.344,1.2c.1-.009-.344-.509-.608-.793s-.243-.57-.608-.468.324.752.567.814S165.26-201.344,165.483-201.364Zm5.7-3.4c.608.611,3-.081,3.324.1s-2.007.407-1.905.651a3.918,3.918,0,0,0,2.149.285c.141-.163.465.325,1.095.366s.567-.244,1.033-.264,1.156-.244,1.176-.508,1.378-.59,1.257-1.037-1.44-.142-1.8-.326-1.216-.427-1.358-.142-.385.366-.506.244.061-.773-.527-.589-.041.814-.163.895-.689-.122-.73-.407-.668.305-.749-.041-.831-.589-.994-.569.163.244.061.407-.507-.163-.669-.183.1.345.021.508-.406-.488-.69-.488-.182.325-.384.345.284.264.466.407S170.979-204.96,171.179-204.761Zm4.25,35.51c.149-.149-.1-.312-.581-.176s-.559.81-.366.8A2.634,2.634,0,0,0,175.429-169.251Zm-.757-.5a.4.4,0,0,0,.581-.068C175.361-170.023,174.471-169.935,174.671-169.753ZM171-167.162c.108.135,1.134-1.207.622-1.194S170.865-167.329,171-167.162Zm-5.689,3.05c.338.054.7-.6.662-.759s.344-.909.216-.989c-.108-.069-.189.189-.311.216s-.256-.515-.311-.216-.324-.122-.594.257.162.718.351.84-.013.3-.256.244S164.97-164.166,165.308-164.112ZM153.5-172.234c-.352.1-.249,1.117-.15,1.017C153.579-171.447,153.849-172.328,153.5-172.234Zm-4.339,4.909c.352.041-.27.3-.337.678s.459.217.486.488-.756.312-.756.57.446-.122.649-.231-.108.637.379.556.351-.745.527-.718-.081.352.068.637-.351.718-.325.922,1,.2,1.311-.122.459.027.243.272a.322.322,0,0,0,.149.569c.27.094.365.122.243.339s-.014.623-.081.826-.906.177-.933.041-.378-.041-.284.15-.3.393-.27.57.528.135.541.353-.365.474-.878.623.108.556.351.379.19.122.541.122.568.285.959.136.379,0,.081.231-.743-.013-1.014.135-1.369,1.183-1.161,1.438c.121.149.283-.217.674-.38s.46.109.676.135.23-.447.4-.406.338-.15.662-.1a.852.852,0,0,0,.717-.2c.162-.135.593.271.729.175a2.685,2.685,0,0,1,1.027-.19,2.847,2.847,0,0,0,1.27-.529c.2-.19-.121-.23-.391-.19s-.217-.272.067-.542.73-.475.757-.881-.865-.692-.96-.474-.3.19-.446-.054.135-.475-.013-.5a.561.561,0,0,1-.3-.5c.041-.135-.23-1-.689-1.112s-.527-.759-.608-1.112-.379-.163-.609-.461-.622-.149-.825-.135,0-.38.325-.6a3.417,3.417,0,0,0,.7-1.6c0-.231-1.419-.217-1.689-.081s-.541-.2-.311-.3.716-.57.689-.758.339-.366.136-.543-.231.231-.406.366a1.466,1.466,0,0,1-.987.014c-.418-.081-.58.515-.568.773s-.486.407-.4.623-.094.38-.23.258-.284-.42-.554-.2S148.809-167.366,149.16-167.325Zm-1.04-.95c.365-.013.784-.637.609-.814S147.848-168.264,148.119-168.275Zm-.567,7.418c.459-.434.7-.014,1.121-.231s.162-1.8,0-2.129a.179.179,0,0,1-.016-.142c.056-.185.483-.218.7-.442.271-.271-.135-.664-.512-1.03-.342-.33-.783.188-1.143.182a.332.332,0,0,1-.114-.02c-.378-.149-.906-.15-.919.19s.419.217.433.434-.433.163-.744.38-.649-.15-.973.013.352.353.108.692.013.325.419.651-.244.406-.244.773-.5.353-.608.6.432.732.906.732A2.783,2.783,0,0,0,147.553-160.857Zm-6.216-17.07c.216.027.568-.407.7-.678a.6.6,0,0,0-.473-.759c-.325,0-.568-.258-.5-.448s-.176-.434-.162-.57-.406-.013-.622.041-.675-.529-.878-.421-.054.394-.109.556-.54-.15-.54.041-.2.216-.365.013-.541-.082-.527.081-.162.028-.473-.163-.635.218-.608.421-.109.257-.365-.19-.554.04-.419.284.081.542-.121.42-.473.082-.6.272-.554-.556-.243-.732-.986-.922-1.392-.922-.135.3.135.515-.19.163-.338-.028-.432-.041-.594.231-.432.42-.459.611.459.393.878.216a1.132,1.132,0,0,1,1.108,0c.216.2-.392.285-.176.448s.041.3-.472.257-1.135.109-1.04.285,1.311-.149,1.324.027,0,.475.325.34.108.244.27.311.121.393-.311.421-.643.114-.46.3c.23.231.7.068,1.162-.041s1.122.448,1.662.664a1.581,1.581,0,0,0,1.581-.366c.108-.285.838-.176,1.134-.379a2.374,2.374,0,0,1,1.23-.475C141.133-177.372,141.12-177.955,141.336-177.928Zm44.227,35.7c.311-.122.189-.353-.014-.176a2.323,2.323,0,0,1-1.3.394c-.608.028-.8.429-.418.651.487.285,1.27-.135,1.243-.285S185.251-142.106,185.563-142.229Zm-7.9.2c-.217-.122-1.19.081-1.447-.163s-.78.192-.553.231a6.933,6.933,0,0,0,1.337.353c.527.013,1.243-.244,1.23-.379S177.874-141.9,177.658-142.025Zm-20.81-4.3c.406.271.865.19.8-.272S156.649-146.456,156.849-146.323ZM9.432-127.627c.164-.27-.793-.44-.567-.091C9.059-127.418,9.267-127.359,9.432-127.627Zm-1.461-.749c.075-.254-.824-.259-.537.045C7.7-128.047,7.9-128.121,7.97-128.376ZM1.063-163.108c-.2-.245-.86.847-.486.691C1.063-162.62,1.266-162.864,1.063-163.108Zm-.486-8.034c.1.305.924.5,1.277.386a.369.369,0,0,0,.182-.63c-.223-.2-.609.285-.649-.041S.476-171.448.578-171.142Zm2.229,7.506c.284.04.406-.245.73-.245s.933-.2.487-.366S2.4-163.695,2.807-163.637Zm8.5,38.238c.194-.15.552-.18.656-.374.14-.26-.193-.807-.7-.748S11.038-125.19,11.309-125.4Zm-.626-1.451c.327-.239.208-.493-.09-.449S10.489-126.708,10.684-126.85Zm2.906-41.913c-.4.467-.75.712-.811.936s-.527-.041-.669.244.1.916.385.712.3,0,.487,0a3.119,3.119,0,0,0,1.2-.855c.182-.285-.325-.366-.344-.549s.425-.183.648-.3-.2-.224-.182-.448S14-169.231,13.59-168.763Zm89.156,8.637a4.651,4.651,0,0,0-1.487,2.061c0,.407-.027.895-.4.868s-.811.325-.513.542-.786.833-.271,1.112c.352.19.918-.082,1.405-.028a1.661,1.661,0,0,0,1.3-.216c.4-.3.4.271.838.216s-.244.353-.217.651.46-.163.784-.325.73,0,.568.272.892.542,1.135.108-.244-1.112-.406-.814-.4-.216-.054-.488-.054-.379-.378-.217-.244-.732.054-.895-.73-.488-.73-.19-.73.109-.811-.163-.594-.352-.406-.542-.622-.3-.7.028-.324-.217.081-.651.27-.814.649-1.031S103.15-160.289,102.745-160.126ZM97.7-157.251c.081-.448-2.583-1.133-2.513-.855C95.273-157.78,97.624-156.8,97.7-157.251ZM78.977-175.392c-.081-.326-2.324.525-1.541,1.017C78.084-173.969,79.058-175.067,78.977-175.392ZM57.046-200.286c-.081.611,1.034,1.53,1.378,1.1C58.748-199.595,57.127-200.9,57.046-200.286Zm-4.581-1.18c.284.244,1.54.448,1.54-.2s-1.58-.733-1.986-.488-2.27.325-1.743.732c.323.25.69-.081,1.094.081S52.181-201.71,52.465-201.466Zm.325.529c-.852.122-2.311.121-2.311.733,0,.488.284.732,1.216.814s1.742-.814,1.3-.814-.162-.285.365-.367S53.641-201.059,52.79-200.937Zm9.486,3.5c.567.488-.284.244-1.054-.285s-.689.366-.324.651-.081.692-.568.04-.73-1.342-1.5-1.383-.419.751-.121,1.139a3.917,3.917,0,0,0,1.459,1.018c.649.366,1.7-.163,2.189-.041s-.528.732-.2,1.139,1.216.122,1.905.082.365-.448.771-.733-.406-.244-.081-.936-1.014-1.789-1.054-1.383-.973-.082-1.7-.366S61.708-197.927,62.276-197.438Zm-2.919-4.6c-.163.366-1.565-.074-1.459.244.04.122.2.61,1.175.325a2.531,2.531,0,0,1,2.432.448c.649.529,1.256.732,1.7.2s-.567-.61-.365-1.017-.648-.651-1.094-.651-.608-.814-.973-.651-.608.448-.608-.081-2.108-.57-2.635-.367.121,1.3.608.977S59.519-202.4,59.357-202.035Zm3.121-2.929c.284.244.933.936,1.216.448S61.985-205.387,62.478-204.964ZM33.594-161.14c.25-.16-.433-.937-.433-1.417s-.229-.985-.957-.6S33.228-160.906,33.594-161.14Zm33.18-42.441c.649.285,2.514-.366,2.676.082s-1.905.488-1.621.773,1.459.732,1.3.977,1.945.935,2.148.61.771-.244,1.3-.041.568-1.261.932-1.017.325-.529.933-.773,1.484-.247,1.54-.529c.041-.2-.162-.488-.892-.407s-1.216-.2-.892-.61-.811-.529-.4-.855-.771-.651-.649-.163-.73.041-.852-.407-1.783-.61-2.879-1.586-2.229-.326-1.58-.2.608.448.081.407-1.459.041-.608.366-.082.448-.771.448-.73.895.162,1.017.244.651-.486.448-.974.162-.325.488C66.481-204.256,66.126-203.865,66.775-203.581ZM41.358-187.962c.324,0,.081-.407.608-.407s.406-.285.892-.244.893-.122.893-.691.365-.774.851-.9.041-.732.73-.895a15.3,15.3,0,0,0,2.919-1.221c.325-.244-.4-.569-1.135-1.017s-1.3-.569-1.865-.2-.121-.407-.568-.2a2.635,2.635,0,0,1-1.824-.529c-.162-.2-2.351.448-2.878.448s.041.57.406.855-.893,1.18-.649,1.383-.244.732-.811,1.383.4.611,1.135.774S40.87-187.962,41.358-187.962Zm1.175-8.867c.439.147.527-.244.73-.448s.122.733.649.733c.446,0,.365-.977.77-.692s.528-.122.609-.407.081-.773.527-.854.081.447.284.813c.3.533.811.041.851-.2s.771-.081.731-.366.2-.366,0-.692.324-.244.567-.488-.324-.041-.73-.407-.568.122-.568.366-.77.041-1.216-.122-1.014.529-1.662.854-.689.9-1.3.855-1.5.529-1.216.651,0,.692.324.529S42.291-196.91,42.534-196.829Zm3.81-.2c-.04-.366-1.781.9-1.418.936C45.655-196.015,46.385-196.666,46.344-197.032Zm1.662.2c.649,0,.852.2-.081.163s-1.337.773-.69.61,1.419-.163.933,0-1.812.274-1.621.529c.122.163.649.122,1.175.326s.852.325,1.256-.122.933-.9.73-.285.649.162,1.743.122-.2.651-1.337.732-.933.651-.041.855a5.233,5.233,0,0,0,3.243-1.018c.446-.447.852.245,1.3-.081s1.3.041,2.067-.122.892-1.627.324-1.871-.567.285-1.014.366-.689-.488-1.054-.854-.122-1.058-.649-.977-1.662.936-.973,1.018.446.447.081.61.852.448.689.692-2.026.04-2.108-.366a2.644,2.644,0,0,0-2.148-.977c-.608.163-.365-.488-.973-.529s-.406.529-.973.57S47.357-196.829,48.006-196.829Zm.77-3.783c.284.366,1.014.732,1.216.244S48.649-200.775,48.776-200.611Zm18.243-.2c.527-.2-.284-.2.081-.691s-.892-.529-.973-.367-1.661-.976-1.905-.61.568,1.952,1.175,1.952A4.247,4.247,0,0,0,67.018-200.815Zm3.688,6.183c.446.326,1.135.529,1.5.2s.527-.57.649-.285c.2.463,1.094.529,3.04.569s1.459-.813,2.027-.488a4.533,4.533,0,0,0,2.432.2c.568-.123.852-1.017.812-1.464s-4.378-.814-5.149-.366-1.986-.2-2.595.122-.4-.407-1.5-.448.081-.61.284-.854-1.662-.9-2.433-.733-1.216-.244-1.945-.57-2.71-.247-2.311.326c.284.407,2.635,1.261,2.878.855s.852.488,1.216.935-.243.611.041,1.424S70.261-194.957,70.707-194.632ZM81.125-174.5c-.73.04-.563,1.08-.122,1.017C81.287-173.522,81.855-174.539,81.125-174.5ZM79.1-177.63c.081-.448-1.337-.814-1.783-1.058s-1.135-.367-1.135-.855-.973-.122-1.013.61-.446.57-.243,1.262-.892.854-.771,1.221.649-.041,1.135-.041-.132.68.487.732a2.345,2.345,0,0,0,1.54-.854c.2-.326.608-.448,1.175-.041s1.783.448,1.864.041S79.017-177.183,79.1-177.63Zm-7.783-30.832c-.487.244-.325.407.364.366s-.283.2-.283.61.811.163.851.57,1.784.569,2.311.081.324.122.284.448,2.473.61,2.594.2.487-.244.974-.122,2.878-.447,2.919-.936.77.244,0,.773-2.311.448-3,.651.446.692,1.135,1.221-.892.244-1.54-.447-2.108-.692-2.878-.651-.527,1.464.04,1.464a1.912,1.912,0,0,1,1.7,1.1c.567.895,1.783.692,1.783,1.1s-1.581-.326-2.473-.489-2.31.407-2.351,1.058,1.3.57,2.189.041.243.163-.2.57,1.054.732,1.054,1.22-1.095.326-1.216-.122-.527-.895-1.581-.814-.77.814-.121.9.689.569-.041.569-2.376.459-1.865.936c.568.529,2.636,0,3,.326s1.379.447,1.622.081,1.054-.2,1.864-.2a1.61,1.61,0,0,1,1.378.447,1.228,1.228,0,0,0,1.459-.122,1.154,1.154,0,0,1,1.014-.325c.568,0,.69-.367.406-.814s-1.013.325-1.095,0c-.1-.4-.771-.529-1.905-.366s-.649-.733.04-.529a4.8,4.8,0,0,0,2.392-.082c.771-.2.162-.569.162-.895s.973-.122,1.7-.122,1.784-1.18,1.825-1.871-1.622-.529-2.433-.529.527-.61,2.068-.529.851-.61,1.135-.854,1.014.285,1.784.122.243-.814.77-.814a13.23,13.23,0,0,0,2.879-1.5c1.661-.936,2.959-.773,3.04-1.3s-2.31,0-2.716-.163,1.662-.611,2.148-.488,1.135,0,2.8-.814.933-1.018.243-.895-1.459-.123-1.418-.57-1.014-.041-1.054-.285-1.014-.122-2.067.285-.081-.407.365-.57-2.676,0-3.2-.366-1.135.61-1.621.122-1.743-.081-1.581.285-.2.366-.689-.041-1.419.041-2.271-.081-.486.692-1.418.285-1.946-.2-1.662-.082-.081.367-.486.244-.771.041-.568.448-1.5-.122-1.5.326-.608.691-1.094.284-2.026-.529-1.58-.162-1.378.162-.892.529-.608.651-.608.447-1.014-.569-1.418-.2-.528.814-.73.569-1.1-.162-1.946.163.121.57.689.2S71.8-208.705,71.315-208.461Zm13.864,25.1c-.2-.285-.73-.325-1.176-.285s-1.216.733-.811,1.424,1.378.162,1.865.081S85.454-182.979,85.179-183.365Zm3.526-5.328c-.122-.366-1.175-.407-1.378.04s-1.054-.488-1.054-.854-1.3-.041-1.135-.651-1.5-.773-1.946-.773-1.094.366-1.014.773-.486.244-.567-.2-1.175.488-1.5.488.2-1.18.041-1.545a9.637,9.637,0,0,1-.649-1.1c-.243-.61-1.459-.366-1.784,0s-1.377.2-1.945.773.04,1.139.284,1.343-.852.529-.487.854.933.163.973.692-1.337-.163-1.54-.61.081-.855-.2-1.18-.04-.733.487-1.3.933-.489.933-.814-2.27-.326-3.608.895a3.155,3.155,0,0,0-.851,3.173c.081.325,1.256.163,1.945.366s.325.488-.2.407-1.418-.244-1.378.122a1.9,1.9,0,0,0,1.783.895c.649-.163.649-.163.933.2s1.054.244,1.824.285a19.057,19.057,0,0,1,2.027.366,1.13,1.13,0,0,0,.933-.407c.121-.2,1.621.325,2.067.285s.162-.448-.122-.57-.162-.651.2-.448.973.326,1.095.692c.1.312.446.163.486.448s1.338.61,1.378.936-1.256.488-.892.773.933-.366,1.419-.407.486,1.058.851.895c.5-.221.893.2,1.378.895s-.04,1.343,0,1.586.973.163,1.5-.122,1.014.326,1.418.692-1.5.976-1.337.651-1.135-1.3-2.311-.855-.365,1.14-.243,1.546-1.054.813-2.148.447-.771.244-1.216.244-.933.692-.527,1.139,1.3.04,2.026.081.812.244.893-.163.851-.2,1.378-.081.4.854,1.054.936.122.732.527,1.18,1.7.2,2.189.691,2.549,1.461,2.838,1.1c.325-.407-1.783-2.278-2.392-2.44s.609-.367,1.378.244,1.905.895,2.473.163-.487-.529-.487-1.058-.364-1.261-.932-1.261-2.027-1.139-1.5-1.383-.162-.57.243-1.017.811.406,1.3.447.568.651,1.337,1.3.852.2.974-.244.973-.081.932-.529.689-.976,1.176-1.18-.406-.692-1.054-.651a.643.643,0,0,1-.77-.692c0-.285-1.216-.976-1.621-.854s-1.095-.529-1.622-.57-1.3-.447-1.216-1.017,1.054.163,1.256-.285-1.013-.2-1.054-.529.284-.2.528-.407-.2-.61-.487-.773-.365.326-.649.326-.04-.448.162-.733-.932-.61-1.418-.447-.649-.122-.649-.448-.852,0-1.175.244-.73-.244-.325-.285S88.827-188.328,88.706-188.694Zm-24.039-.448c1.014.041,1.054-1.626,1.216-2.237s-.811-.569-.568-.122-.04.895-.121.367-.852-.041-1.135-.448.892-.448,1.175-.977-.933-.447-.649-.854-1.783.041-1.175.285.041.569-.527.163-2.14.273-1.581.732c.446.366,1.784-.244,1.014.814s-1.095-.285-1.824-.163-.4,1.017.69,1.342.973.936,1.864,1.545S63.654-189.181,64.667-189.141Zm-3.04,3.01c.04-.61-1.135-.895-1.621-1.22s-.69-.163-1.46-.733.2-.854-.364-1.3a1.725,1.725,0,0,1-.365-2.074c.4-.407.851-1.017.121-1.3s-1.905.244-1.783.407,1.135.732,1.135.976-.933-.691-1.256-.488-.689-.407-.973,0,.365,1.83.608,2.237-.243.407-.568.488-.365-1.139-.689-1.586-1.621-.976-1.7-.651.812.326.69.773-.608-.284-1.054.082-.366.122-.284-.244-.649-.773-1.459-.692-.365.651-.609.854-1.459-.122-.689-.284.446-.611.162-1.058-1.054.081-2.311.529-1.824.936-1.661.976.2.244-.284.651,0,.773.446.773.053.359.365.448c.284.081,1.743-.57,2.148-.285s-2.392.448-2.392.936,1.541.773,2.676.57,3.122.162,3.122.447-1.337.2-2.351.163-2.757.285-2.676.61c.091.364.2.367,1.256.855s2.149-.244,2.108.448.568.854,1.986.895,2.068-.651,2.757-.611a1.232,1.232,0,0,0,1.337-.569c.325-.489.609-.2.69.04s.973.2,1.175.407c.517.519,2.23.366,2.879.041s-.284-1.221-.609-.814-.608.163-.689-.041.649-.325.892-.61S61.586-185.521,61.627-186.131ZM66-199.839a2.568,2.568,0,0,0,2.675-.488C68.6-200.571,65.526-200.2,66-199.839Zm4.824.529c.649.244,1.621-.326.892-.692S70.075-199.594,70.829-199.31Zm-12.566,3.58c-.244.569.562.778.851.447S58.505-196.3,58.262-195.73Zm7.216.691a6.7,6.7,0,0,0,2.756.651c.73-.04.365-.935-.446-1.545S65.156-195.29,65.478-195.039Zm15.079,3.458c.041.61.811.814,1.378.448s2.189.109,2.189-.367c0-.447-1.7-1.261-2.311-1.139s-1.58-.61-1.824-.081S80.517-192.191,80.557-191.581ZM120.342-51.523c.356.318.673.912,1.029.357s-1.863-1.071-1.82-.873C119.63-51.683,119.986-51.841,120.342-51.523Zm12.266-134.96c-.54-.135-1.406-.6-2.027-.244s-.243-.515.271-.6.3-.325.162-.867.865-.19,1.3.434a1.834,1.834,0,0,0,2,.678c.73-.217.028-.814.325-1.221s-2.243-1.681-2.378-2.115.649-.135,1.352.163.864-.57.864-.949-1.513-.407-2.189-.028-1.324-.488-.4-.6.081-.489.351-.759,1.432.787,2.027.6,1.026.028,1.54-.379-.919-.786-1.216-1.139,1.486-.217,2.027-.191.674-.786.243-.623-1.973-.542-1.649-1.03.919.081,1.595-.272.054-1.682-.432-1.682-1.621-.162-1.621-.407-.946-.461-.675-.705.622.3,1.243-.163,1.919.109,2.486,0-.244-1.165-.568-.976-1.432.244-1.514-.326,1.055,0,1.244-.271-1.568-.976-1.838-.407-1.243.379-.73.054a1.966,1.966,0,0,0,.568-1.708c-.054-.461,1.838-.488,1.621-1.247s.892-.922,1.514-.922-.027-.813-.622-.732-1.215.758-1.513.488.7-.759,1.243-.759a6.452,6.452,0,0,0,2.3-.326c.459-.271-.811-.515-1.675-.406s-.864-.272.433-.3,1.08-.3,2-.407.621-.488,1.189-.515,2.054-.651,2.054-.949-2.135-.895-3.135-.895-1.811.163-1.864.867-1.325-.135-1.865.109-.27-.569-.811-.3-1.135.922-1.784,1.194-1.134.949-1.54,1,.865-1.246,1.514-1.9.3-1.41-.568-1.328-.675.623-1.162.732-2.81,1.275-2.919.922,1.919-.95,1.893-1.194-2.568-.271-3.7-.108-3.136.814-3.162.488,2.324-.787,3.513-.922c1.216-.138,3.379.082,4.3-.3s2.3-.407,2.54-.706-1.054-.705-1.7-.677-1.3-.054-1.243-.38-1-.407-1.108-.651-2.136-.054-2.568-.325a6.076,6.076,0,0,0-2.783-.326c-1.081.081-3.3.054-3.81.109a8.125,8.125,0,0,1-1.3.217c-.459-.027-1.162.135-.892.434.489.54-.73.759-.649.352s-1.054-.6-1.405-.3c-.4.34-2.217-.353-2.486,0s-2.406.244-3.027.353.973.57.919.841-2.027,0-1.621.488,1.7.84,2.323,1.465-.486.244-1.189-.217-1.595-.3-2.027-.759a3.107,3.107,0,0,0-2.459-.543c-.483.324,1.108.922,1.108,1.276s-1.081-.082-1.271.053-1.134-.922-1.675-.922-.081.489-.081,1.166-1.054,1.085-.757.624.081-1.654-.487-1.871-2.027.461-2.783.434-1.757.216-1.108.6-.027.6-.594.19-2.432,0-2.054.272a1.18,1.18,0,0,1,.27,1.382c-.243.325-1.027-.326-1.757-.272s-4.351,1.789-4.135,2.251,1.757.081,2.243.352-.162,1.275-.756,1.682-2.81.027-2.864.515-3.486.569-3.486,1.356a.66.66,0,0,0,.54.678c.486.1,1.081-.054,1.514.434a2.6,2.6,0,0,0,2.486.19c.838-.325,1.459.054,1.432.542s-1.891-.19-2.459.163-2.324.054-2.243.434.947.3,1.649.434.053.434.027.733.378.244,1.081.6,1.864.57,1.486.163.73-.353.919-.109.7-.353,1.216-.217.7-.488,1.108-.216,2.3.434,2.946.786,1.54.434,1.459.949.54.895,1.27,1.221a1.464,1.464,0,0,1,.837,1.491c-.027.461.784.786.649,1s-.027.515.459.949-.756.759-.459,1.139-.432,1.112.432,1.248.73-.6,1.378-.6-.027.57.325.922,1.08.272,1.757.84.243.841-.379.38a3.427,3.427,0,0,0-2.432-.19,5.082,5.082,0,0,0,2.46,1.139c.459-.163,1.081.678.811.949s-.135.949-.19,1.275-.73,0-1.162.054-.73.19-.73.651-.675.786-.756,1.355.54.543.892.787-.649.407-.7.814.918,1.139,1.27,1.328.027,1.112.162,1.573.594-.109.54.488.432.57.46.922.865.3.7.786.244.841.432,1.112.893.732,1.027,1.084.541.814,1.027.678.513.326.892.271.973.163,1.082.462,1.27.569,1.594.623.379-.542.676-.705.189-1.356.459-1.438.19-1.328-.081-1.437-.163-.542.459-.46.406-.543.7-.624.162-.651.378-.705.189-.434.027-.651.028-.379.351-.434.244-.515-.189-.677-.3-.651.135-.353.757.081.513-.244.3-.488.865-.542.865-.353.757-.787.649-.407.459-.027-.081.759.189.488.783-.081,1.7-.352a3.111,3.111,0,0,0,2.027-1.763c.215-.732,1.27-.651,1.134-1.139s.19-.678.865-.353.135-.216.892-.216.622-.271,1.352-.3a7.482,7.482,0,0,0,3.269-.895,21.865,21.865,0,0,1,2.595-1.356c.568-.353.7-.651.352-.46A2.677,2.677,0,0,1,132.608-186.483Zm-26.646.244c-.27-.515-1.651-.728-1.784-.325-.054.162-.486.406-.135.786s.594.216,1,.6,1.621.054,1.649-.38S106.231-185.725,105.961-186.239ZM70.869-106.9c.2-.325-.162-1.545-.567-.936S70.7-106.626,70.869-106.9Zm28.62,51.21c-.446-.082-1.515.825-1.054,1.057C98.921-54.384,99.935-55.6,99.489-55.685Zm1.662.447c-.325-.61-1.824.529-1.5.692S101.308-54.943,101.151-55.238Zm-7.013-69.555c.162-.406-1.865-.569-1.5,0S94.046-124.563,94.138-124.793Zm-10.054.245c.163-.367-2.065-.679-1.864-.326C82.382-124.589,83.922-124.182,84.084-124.548Zm.2-3.133c-.608,0-2.594-1.383-4.418-1.789s-3.415.909-3.243,1.139c.244.326,1.135-.407,1.581-.732s.852.163.892.366.609.326,1.54.366,1.054.814,1.946,1.018,0,.569.446.732a7.855,7.855,0,0,0,2.96-.081C86.152-126.867,84.9-127.681,84.287-127.681Zm17.6,48.327c-.126.142-.246.269-.358.393C101.638-79.084,101.76-79.213,101.886-79.354Zm-1.06-9.889a.3.3,0,0,0,.158-.057l0,0A.292.292,0,0,1,100.826-89.243ZM92.4-109.575l.02-.009,0,0ZM90.317-91.362s.008.007.012.008c-.013,0-.026,0-.042.023A.066.066,0,0,1,90.317-91.362Zm-.452-12.5c-.092-.012-.183-.039-.282-.054C89.682-103.905,89.773-103.877,89.865-103.865Zm-5.1-3.656.052.061-.093-.108Zm-12.4-16.891h-.035l.042,0Zm-.165,3.247a.154.154,0,0,0,.034-.02A.177.177,0,0,1,72.2-121.165Zm-7.732-41.781c.324.407.811,2.075,1.095,2.6s.283,1.383-.081,1.424c-.444.049.04-1.18-.771-1.627a2.635,2.635,0,0,1-1.378-2.033A.665.665,0,0,1,64.465-162.946ZM50.244-173.2c-.548.1-.113.647-.774.7s-2.256.114-2.482-.258c-.076-.124.87-.033.935-.307s.322-.712.725-.712.37-.533-.29-.856.95-.534,1.321-.016,1.031.889,1.4.517,2.482-1.407,2.482-.922-1.563.809-2.191,1.359S50.791-173.3,50.244-173.2Zm-5.255-6.371c-.547-.1-.885.178-.612.372s.29.356-.273.485-.935.566-1.16.517.966-.905.66-1.132-1.063.388-1.08.663-.515.29-.821.274-.709-.307-.4-.339.1-.372.516-.533-.081-.4.048-.582.983.178,1-.146-.854-.6-1.144-.4a1.791,1.791,0,0,1-1.773.291c-.254-.112,2.031-.356,2.418-.711s2.127-.76,2.256-.437-.934.534-.419.825a1.383,1.383,0,0,0,1.547-.21c.193-.307,1.031-.259.5.4S45.538-179.476,44.99-179.573Zm27.038,23.645c.444-.358.8-1.12,1.193-1.12.527,0,1.864.122,1.945.814s.892.041.973.692c.069.553.6.988.514,1.281a.27.27,0,0,1-.109.142c-.334.234-.243-.366-.851-.366s-1.216.569-1.7.325-.243-.569-.689-.569.324-.855-.325-.489-1.621,1.261-2.067.855-.852.122-1.175-.2,1.135-1.22,1.824-1.18A.683.683,0,0,0,72.027-155.928Zm5.148,2.03a2.99,2.99,0,0,1,1.4.186c.568.2,1.418-.244,1.7.448s.943,1.213.325,1.261c-.527.041-1.216-.692-1.175-.285s-.284.2-.284.814-.406,1.464-.649,1.424a.094.094,0,0,1-.023-.011c-.233-.1.129-1.012-.342-1.169-.487-.163-1.054.692-.973.163s.811-.977.365-1.668-1.257-.691-1.419-.162-.73.285-.933.691a3.346,3.346,0,0,0-.243,1.952c.162.652-.041.977-.649,1.342s-.926-.559-.689-1.748c.162-.814.608-1.586.2-1.586s.527-.977,1.377-1.18,1.906-.122,1.906-.366C77.072-153.842,77.11-153.876,77.175-153.9Zm4.3,3.979a8.291,8.291,0,0,1-2.094,1.291c-.77.407-1.824.2-1.824-.407s.568-.488.69-.2c.045.107.182.029.367-.1.309-.225.752-.612,1.132-.587.608.041.771.407,1.175.122s.487-.407.568-.2A.114.114,0,0,1,81.476-149.919Zm2.7-1.606a.373.373,0,0,1,.034.05c.293.529-.77.854-1.783.895a6.5,6.5,0,0,0-.727.07c-.407.059-.539.089-.651-.192-.162-.407,1.216-.814,1.865-.733C83.523-151.358,83.956-151.791,84.172-151.525ZM119.19-104.17a2.476,2.476,0,0,0-2.676-.833c-.669.182-1.358-.326-1.8-.427s-.872.467-1.2.589.162-.488.182-.874-1.216-.936-2.148-1.3-1.338-.183-1.338.407-.365-.183-.649.447-.811.224-.465.02a2.071,2.071,0,0,0,.79-1.058c.121-.386-1.338-.691-1.845-.488s-.182.936-.588.712-.081-.773.244-.753.689-.651.912-1.139-.385-.57-.75-.976-.287-1.577-.656-1.762c-.4-.171-.986-1.107-1.573-1.229a4.941,4.941,0,0,1-.769-.259,2.006,2.006,0,0,0-.914-.208c-.487.061-.993.285-1.175.02s-.446-.224-.69-.02c-.343,0-.716-.733-.932-.733a.463.463,0,0,1-.466-.548c.06-.346-.568-.387-.912-.773a.845.845,0,0,0-.336-.212,3.638,3.638,0,0,0-1.326-.134c-.344.02.223-.386.243-.752s-.973-.427-1.358-.508-.284-.489.122-.508-.223-.305-.771-.224a6.263,6.263,0,0,0-1.763.631c-.446.244-1.216-.712-1.724-.509s-1.216.2-1.2-.2a.617.617,0,0,0-.709-.712c-.506.041-.384-.508-.77-.508s0,.468-.263.59-1.175.345-1.237.711.487.977.3,1.342-.79.061-.974-.325.528-.977.406-1.2a.906.906,0,0,1-.121-.635c.628-.26.83-.524.446-.749s-.609.427-1.034.489-.507.325-.79.467-.812.02-.831.264c-.022.266-.182,0-.426-.061s-.871.489-.851.793.121.59-.325.875a4.122,4.122,0,0,0-.912,1.058c-.359-.029-.545-.333-.77-.671-.325-.488-.912-.448-1.277-.611s-.831.061-1.3.489a1.212,1.212,0,0,1-1.459-.041,2.362,2.362,0,0,1-.47-.421,11.666,11.666,0,0,1-.9-1.132,1.683,1.683,0,0,1,.1-1.376c.121-.386-.1-1.322.121-1.566s.1-.386.2-.955c.009-.539-.6-.4-1.013-.814-.446-.448-1.418-.244-1.945-.041s-1.135-.223-1.7.1c-.337.183-.434.018-.388-.207a.837.837,0,0,1,.287-.464c.365-.284-.182-1.423.244-1.525a1.869,1.869,0,0,0,.608-1.363c.06-.548-.121-.732.162-1.037s.588-.325.507-.752-.466,0-.79-.2-.609-.061-1.44.061-1.216.468-1.176,1.058-.284.326-.263.834-.649.529-.608.833-.528,0-.69-.1a13.219,13.219,0,0,0-2.148.468c-.244.04-.69-.509-1.034-.489s-.487-.508-.527-.936-.69-.813-.973-1.2a3.877,3.877,0,0,1-.345-1.79,6.417,6.417,0,0,1,.3-2.562c-.058-.47-.195-.532-.3-.526a.746.746,0,0,1,.38.142c.042-.726-.7-.848-.264-1.182.506-.386-.02-.712.223-.875s.668-.325.668-.569.223-.244.547-.2.933-.529.892-.752.061-.264.447-.183.324-.447.567-.366.446.224.466.041.263-.142.446.1.709.305.75.021.344,0,.608.285.385.2.771.223.385-.081.406-.326.425.529.811.57.081-.244-.2-.467.061-.326-.182-.508.3-.427.79-.407.466.142.649-.143.365,0,.365.244.791-.142,1.216-.142a.932.932,0,0,1,.851.61c.041.244.325.367.629.1s.567-.57.851-.285.568.671.912,1.017-.162.773.02,1.037-.02.63.385.915.04.875.365.956.587.589.628.793.649.467.689.122.365-.752.406-1.078a4.4,4.4,0,0,0-.506-1.851c-.264-.366.06-.447-.264-.874a3.094,3.094,0,0,1-.506-1.79,3.788,3.788,0,0,1,1.074-1.911c.344-.305.73-.142.811-.467s.507-.733.75-.733.506.062.547-.2.446-.59.973-.671.223-.366.082-.61c.324-.163.648-.142.851-.285s.669-.529.223-.549-.547-.2-.284-.305.04-.589-.325-.63-.243-.223-.02-.448-.324-.589-.587-.773.162-.285.365-.325.041-.977.142-1.2c.163.224-.04.59.223.895a1.149,1.149,0,0,1,.243,1.1c-.1.467.1.345.406-.264s.344-1.139.141-1.2a1.2,1.2,0,0,0,.69-.427c.344-.366.709-1,.487-1.139s.1-.285.506-.264a2.782,2.782,0,0,0,1.337-.366c.2-.4-1.4.182-1.4-.041s1.014-.448,1.479-.467.244-.651.446-.386a.543.543,0,0,0,.771.06c.263-.163.06-.63-.243-.712s.223-.284.121-.467a1.027,1.027,0,0,1,.588-1c.385-.082.2-.326.527-.326s.385-.386.669-.671.689.448,1.135.041a5.171,5.171,0,0,1,.683-.514,2.114,2.114,0,0,1,.958-.4c.366.02.912-.467,1.075-.773-.263.488.324.732.892.711s-.263.2-.69.183-.608.041-1.175.61-.425.733-.1,1.018.75.162,1.2-.224.426-.773.872-.752a9.889,9.889,0,0,0,2.108-.57c.506-.162.182-.244.182-.467s.892-.223,1.216-.448-.061-.407-.344-.366-.061-.407-.02-.63-.608.1-.628.366-.466.366-.466.529c0,.475-.061.223-.384.386s-1.581,0-1.622-.285-.952-.426-.993-.813-.487-.509-.121-.936-.061-.631-.406-.305c.385-.549,1.256-.732.811-1.546s-3.243.244-3.953.651-1.6,1.708-1.986,1.708.669-.692.831-.956-.04-.529.182-.427.852-.874,1.277-1.2.892-.02.953-.284.263-.448.668-.814,5.25-.305,5.716-.285a2.731,2.731,0,0,0,1.642-1.017c.263-.407.608-.407,1.256-.366s.952-.549,1.277-.773c-.365-.448-.628-.631-.344-.652s.425-.182.547-.548-.1-.2-.487-.712-.588.163-.973.122.263-.529-.061-.732a1.358,1.358,0,0,0-1.418.345c-.487.407-.446-.02-.872.386s-.425-.2-.222-.366.344.02.527-.223.365,0,.831-.305.871-.163,1.014-.386-.223-.529-.669-.427-.75-.61-1.033-.407-.223-.3-.547-.1-.507-.061-.649-.448a3.116,3.116,0,0,0-1.54-1.18,1.321,1.321,0,0,0,.83-.651c.122-.2-.2-.386-.365-.406s-.162-.286-.121-.489-.568-.468-.588-.671-.365-.346-.344-.529-.344-.448-.344-.692-.609-.732-.628-1.017-.345-.489-.466-.834-.284-.183-.406.305-.547.467-.425.63c.249.334.061.345-.122.549s.122.508-.182.508-.162.63-.324.345-.547-.2-.547.082-.649.548-.912.529-.263-.57-.487-.407-.182-.468-.527-.448-.588-.02-.487-.325-.587-.448-.365-.631-.061-.508-.1-1.037.3-.569.3-.773-.243-.2-.487-.041-.243-.223-.506-.2-1.054-.02-1.095-.386-.3-.183-.426-.529-.446-.081-.446-.325-.142-.346-.384-.367-.325-.285-.649-.325a1.937,1.937,0,0,0-.912.3c-.182.082-.649-.284-.831-.142s-.223-.1-.73-.245-1.175-.182-1.216,0-.446.245-.385.671.487.346.588.63-.2.183-.223.448-.284.244-.284.427.182.143.284.508.3.345.365.834-.162.386-.365.447.021.305-.263.63-.527.671-.3.875,1.054.549,1.378,1.1a3.263,3.263,0,0,1,.2,2.015c-.1.61-.79.752-1.3,1.281a1.583,1.583,0,0,1-1.277.467c-.243.02-.1.508.244.895s.061.509.243.916,0,.732.263,1.1.1.508-.2.773.122.122.142.468-.142.142-.406-.041-.506.345-.506.57-.628-.305-.771-.285.041-.346-.324-.63-.649-.346-.649-.631-.628-.488-.628-.813a4.566,4.566,0,0,0-.06-1.4.739.739,0,0,1,.1-.732c.122-.223-.142-.57-.506-.57a12.861,12.861,0,0,0-1.378-.081,1.259,1.259,0,0,1-.952-.183,3.37,3.37,0,0,0-1.257-.61,1.332,1.332,0,0,1-.973-.671c-.06-.183-.69-.325-.831-.508a1.483,1.483,0,0,0-.993-.244c-.243.041-.852-.509-1.216-.488a10.242,10.242,0,0,0-1.358.406c-.141.02.021-.3.122-.448s-.3-.752-.406-1.159-.243-.855-.668-.793a1.707,1.707,0,0,1-1.014-.244,4.2,4.2,0,0,1-.041-1.729c.1-.488.628-1.221.628-1.525s.345-.448.649-.529.061-.671.365-.712.325-.163.385-.407c.02-.488.182-.549.649-.549s1.155-.162,1.054-.63-1.317-.122-1.317-.508-1.54-.407-1.439-.63,1.54.163,2.067.366a2,2,0,0,0,1.095.163c.425-.02.141-.57.222-.793s.892.345,1.358.224.913-1.078,1.3-1.342.041-.509-.709-.448a2.1,2.1,0,0,1-1.581-.529c-.4-.305-.365-.549.061-.508s1.439.874,1.824.895,1.054-.752,1.378-1-.3-.346-.527-.53.384-.3.709-.3.466.285.587.427.69-.1.974-.1-.041-.467-.507-.651c.3.041.628-.02.791.305.236.475.384.163.79.02a1.933,1.933,0,0,0,.831-.63c.222-.244.263.04.527-.346s-.122-.752-.446-1,.021-.488-.3-.651c.426-.305.75-.427.933-.712s-.608-.345-.243-.548.061-.407-.3-.407-.669-.183-.689-.489-.649-.1-1.034-.284a3.72,3.72,0,0,0-1.439-.123c-.2.021-.223.855.081.875s.547.345.283.447.041.427-.162.407-.527-.122-.587.407-.1.733-.446.915-.082-.589-.406-.569-.365.651-.121.711.283.264.344.57-.446.081-.649.447-.223-.162-.507-.407-.628-.651-.608-.955a.4.4,0,0,1,.385-.407c.222-.041,0-.244-.02-.611s-.284-.244-.608-.63-.669-.386-.852-.2-.06.529-.344.651-.162.692-.406.732-.1-1-.3-1.1c.426-.427.609-.753.345-.753a3.048,3.048,0,0,1-.912-.366c-.182-.081-.487.346-.69.183s.02-.57.041-.793.324.1.527-.183-.568-.285-.568-.589-.608-.386-.811-.488.142-.611.041-.814-.852-.875-1.175-.814-.406-.427-.223-.407.325-.1.669-.488.385-.508.141-.59c.487-.285,1.237,0,1.48-.183a17.7,17.7,0,0,0,1.318-1.811c.3-.426-.223-.467-.953-.406s-.892-.285-1.5-.326a4.2,4.2,0,0,0-1.905.305c-.162.182.3.345.244.549s-.426-.143-.588-.061.061.345,0,1.058a1.006,1.006,0,0,0,.344,1.017c.2.264.163.61.163,1.058s-.426.427-.568.529.365.264.284.549-.507-.163-.75-.082-.446.774-.182,1,.365.182.162.447-.425.652.061,1.037,1.378.346,1.845.652-.2.122-.02.467-.3.467-.283.732.2.122.446-.325.425.122.4.508-.365.163-.628.549a.735.735,0,0,1-.892.366c-.385-.081-.162.549,0,.895s-.041.468-.487.346-.709-.407-.487-.753.385-.752.122-.711-.871-.02-1.054-.305.121-.163.668-.1.081-.366.487-.366.709.223,1.054-.082-.223-.895-.507-.793-.73.224-.73-.061.487-.082.75-.142-.142-.427-.547-.326a.875.875,0,0,1-1.014-.223c-.324-.345-.912-.549-1.054.244s-.71.366-.933.63.263.448.811.468.952.529.689.529-.141.386-.425.244-.568,0-.365.244-.081.345-.061.59-.426.02-.852-.02a7.48,7.48,0,0,0-1.784.223,1.684,1.684,0,0,1-1.439-.345c-.243-.264-.567-.224-.973-.224s-.284-.386-.811-.407-.406-.467-.466-.732-1.115-.183-1.5.061-1.135.142-1.337.589.182.386.406.386c.31,0,.283-.366.851-.285s.973-.589,1.216-.345-.973.712-1.5.793-.4.508.1,1.261-.222.326-.222.692-.953-.122-.568-.244.2-.508-.1-.752-.506,0-.466-.264-.324.02-.608-.2-.425-.407-.811-.2a6.811,6.811,0,0,1-1.683.285,5.218,5.218,0,0,1-2.7-.183c-.284-.285.73-.793,1.033-.712s.122-.325-.344-.691-1.5-.59-1.48-.367-.587.02-1.337-.122-.852-.406-1.337-.426a3.226,3.226,0,0,1-1.784-.611c-.567-.447-1.905-.325-2.067.082s-.608.386-1.054.386.2-.5.041-.59c-.214-.115.02-.671-.3-.711s-.628,1.342-1.236,1.3-.872-1.464-1.378-1.83-.973-.386-.547.162-.365.163-.324.529-.69.793-.669.59-.406-.427-.892.142-.831.488-.872.285-1.48.529-1.418.773-.223.426-.609.407-.081-.346.223-.508a8.681,8.681,0,0,1,1.764-1.018c.486-.081,1.418-.467,1.439-.691s-.466-.041-.791-.1-.892.305-1.439.549-1.175.163-1.014.488-.506-.04-.648.183c0-.264-.69-.488-.69-.345s-.122.325-.608.325-.973.346-.649.59.527.366.365.529-.669-.427-1.378-.367a3.413,3.413,0,0,1-2.129-1c0-.165-1-.062-1.689-.136a1.764,1.764,0,0,1-.419-.087,4.737,4.737,0,0,0-1.926-.529,3.852,3.852,0,0,1-1.723.061,2.281,2.281,0,0,0-1.439-.2c-.668.1-1.095-.366-1.946-.57a5.207,5.207,0,0,0-2.33.163c-.284.1-.223-.305-.588-.264s-.081-.163-.283-.467-1.216-.021-1.581.02-.466-.182-.446-.366-.325-.122-.466.122a.5.5,0,0,1-.709.122c-.163-.162.344-.223.365-.407s-.528-.285-.73-.345-.528.2-.953.59a1.829,1.829,0,0,1-1.439.3c-.385-.04-.872.041-.852.264s.487.2.2.489-.385-.387-.669-.082S5.6-186.6,5.4-186.64s-.872.692-1.074.895.162.387-.385.977-2.007.467-2.311.467-.081.346-.243.57.182.427,1.014.651,1.4,1.322,1.5,1.586,1.135-.02,1.54.041-.04.63.3.793.872-.082.973.2-.689,0-1.094.305-.609.447-.771.223-.831-.081-1.175-.041-.02-.426,0-.63-.466-.345-1.135.041-.425.244-.506.549-.365-.183-.79.081-1.115.448-1.237.712.912.447,1.318.529-.487.345-.163.447.182.407.69.671,1.642,0,1.945,0,.588.366.831.1,1.156-1,1.622-.569-.507.366-.264.63.547.895.1,1.221a1.3,1.3,0,0,1-1.114.081c-.244-.02-.1.448-.487.752s-.669-.325-1.155-.325-.385.63-.365.936-.73-.061-.912.67-.953.1-.446.814.425.264.83.549-.446.793-.04.874.851.814,1.135,1.078.649-.142,1.075-.163.222-.61.466-.386.587.875.364,1.037-.04.671-.081.915.933.163.994-.122.83-.366,1.256.1.567.548.567.182.365-.773.385-.467.365.386.993.1c-.427.989.02,1.81-.3,1.892s-.588.915-1.115.977-1.419,1.058-1.54,1.22-1.256-.325-1.419.142-.848.816-.668,1c.121.122,1.054-.346,1.095-.59a1.1,1.1,0,0,0,1.074-.264c.182-.162.487-.1.669-.081s.263-.223.811-.325.425-.265.547-.549a4.856,4.856,0,0,1,1.662-.956c.243-.061.1-.467.365-.489a2.6,2.6,0,0,0,1.013-.63c.345-.285.426-.163.69-.264s.06-.63.324-.671a.518.518,0,0,0,.466-.468c0-.223-.668-.223-.73-.366s.527-.671.75-.651a.64.64,0,0,0,.608-.549c.02-.325.345-.386.609-.67s.2-.53.466-.549.506-.386.79-.549,0,.2.547.223a2.294,2.294,0,0,0-.933.529c-.365.346-.081.448-.365.834s-.3.63.061.671.02.3-.324.407-.1.3.365.3,1.155-.671,1.8-1,1.135,0,1.318-.061-.2-.366.02-.467-.263-.163-.4-.549.223-.142.3-.448.3-.183.506-.04.487-.142.669.244.385-.1.709.163-.061.223-.406.3c.365.1.588-.04.831.183s.345.122.547-.081c.2.345.628.407,1.237.508a9.852,9.852,0,0,0,1.986-.061c.284-.02.182.427.811.549s.79-.63,1.115-.366,0,.366-.182.569.2.224.446.326a3.5,3.5,0,0,1,1.074.529,3.194,3.194,0,0,0,1.075.874c.648.326.02-.814.527-.447s.324.02.73.386.263-.163.081-.773.182-.2.365.081a1.618,1.618,0,0,1,.061,1.2c-.121.366-.73.061-.669-.142s-.608-.122-.628.163a1.194,1.194,0,0,0,.75.9c.325.06.081.569.284.63.278.084.263.61.425.529s.1-.712-.081-1-.1-.692.142-.611,0,.509.121.652.264-.143.547-.305-.121-.631-.02-.875.425.2.547.631-.3.407-.3.63-.385.123-.506.244-.061.936.1.956.263-.671.365-.325.487-.448.588-.122.587.691.771.61-.082-.427-.365-.448-.244-.488.02-.508.73.671.71.915-.244.224-.466.468-.528-.407-.791-.386,0,.426.122.711-.324.671.02.895.243-.142.3-.3.325.041.507.182.2-.325.2-.508.3-.081.466.163.182-.264.425-.223.081.427.081.651.425-.183.385.061c.018.282.179.4.385.57.243.2-.447.2-.244.386s-.04.467.162.692a.592.592,0,0,0,.791-.041c.222-.183.384.224.2.529a.245.245,0,0,0,.384.305c.182-.224.568.366.75.467-.243.407-.2.936.02.956s.2.305.2.488.709.448.973.366.506.163.628.386.608.386.79.244.3.265.345.549.446.122.689.1.385.326.547.264c.357-.134.465.491.7.858.393.444.15.688.252,1.074s.02.936-.284.936a.246.246,0,0,1-.122-.468c.223-.122.1-.569-.122-.569-.173-.461-.14-.6-.081-.712.142-.264-.3-.081-.567-.366s-.953-.224-1.054-.489-.73-1.22-1.074-1.2a1.7,1.7,0,0,1-1.2-.264c-.406-.305-.669-.326-.953-.143s.3.223.284.426.182.326.426.285.384.468.628.489.324.406.608.406.344.326.487.509.466.02.466.2c0,.164.324.312.406.517a2.8,2.8,0,0,0,.486,1.293c.324.427.1.692.4.855-.283.264-.081.529-.182,1.139s-.081,1.871-.141,2.258-.507,1.017-.243,1.423a1.91,1.91,0,0,1,.3,1.485,1.363,1.363,0,0,0,.1,1.2c.223.386.041,1.058.284,1.2a2.284,2.284,0,0,1,.69.793c.222.367.425.142.465.509s.041.426.365.569.122.508.122.712.425.569.953,1.037.081.854.466.854a2.266,2.266,0,0,1,1.135.468c.385.244.507.1.771.163a1.809,1.809,0,0,1,.851,1.017,3.475,3.475,0,0,0,.206.578,3.685,3.685,0,0,0,.484.765,4.6,4.6,0,0,1,.77,1.789c.041.325.629.589,1.135.915a1.219,1.219,0,0,1,.446,1.221c-.061.182-.689-.122-.73.06s.811.895,1.135.855.486.162.993.61.465.977.263,1.139.4.508,1.054.936a2.318,2.318,0,0,1,.973,1.18c.061.223.344.02.446-.285s-.2-.386-.2-.732-.527-.285-.771-.326.02-.569-.222-.813a3.533,3.533,0,0,1-.588-1.3c-.121-.448-.749-.9-1.014-1.383a3.253,3.253,0,0,0-.73-1c-.182-.122.264-.305.1-.489s-.4-.162-.709-.3a.784.784,0,0,1-.506-.712,5.806,5.806,0,0,0-.3-1.362c.425.02.506.141.649.061a.364.364,0,0,1,.486.2c.1.223.447.02.609.122s-.365.223.162,1.159.162.407.162,1.037.325.345.426.244.384.2.648.529.771.345.771.529a.6.6,0,0,0,.446.61c.344.061.406.448.628.489s.263.284.142.548,0,.489.568.712.3.264.749.692a26.509,26.509,0,0,1,1.967,2.2,3.708,3.708,0,0,1,.446,1c.1.285-.2.427-.041.671s-.3.142-.284.326.284,1.1.73,1.139.953.59,1.318.895.912.244,1.459.448a14.783,14.783,0,0,0,1.8.915,8.185,8.185,0,0,1,2.068.895,2,2,0,0,0,1.844-.1,2,2,0,0,1,1.662.244,5.272,5.272,0,0,1,.984.767,12.725,12.725,0,0,0,1,.859c.385.245,1.014-.02,1.277.224a5.018,5.018,0,0,0,1.8.63c.374-.187.435-.232.567-.122.067.472.058.6.223.692.324.183.77.895,1.115,1.077a.643.643,0,0,1,.312.372c-.252.483-.272.97.174,1.154s.3-.1.527-.1.2.345.406.345.669.244.649.57.162.467.527.467a2.14,2.14,0,0,1,1.4.549c.3.366.487.122.669.447s.608.02.709-.183-.223-.285-.263-.508.4-.142.486-.448.73-.447,1.014-.325.528.325.263.63c-.2.227.2.636.538.954.115.11.221.207.293.286.284.305.1.549.182.712s.162.407,0,.508-.02,1.221.162,1.424,0,.386-.2.793-.385.59-.75.611-.344.589-.466.589c-.1,0-.167.206-.182.383.02.309-.285.431-.629.451s-.3.406-.3.671-.284.264-.4.548.04.346-.244.489a.405.405,0,0,0-.2.63c.162.244-.021.467-.061.61s.244.2.527.468.325-.1.446.1a.426.426,0,0,1-.4.569,1.419,1.419,0,0,0-.831.814c-.162.346.284,1.018.344,1.261-.324.467.385.793.71,1.037s.608.936.912,1.261.324.611.648,1.4A14.768,14.768,0,0,0,83.6-96.116c.446.57.649,1.017.547,1.18a.782.782,0,0,0,.344.833,7.128,7.128,0,0,0,1.439,1.018,10.645,10.645,0,0,1,2.635,1.626,3.236,3.236,0,0,0,1.1.834,7.216,7.216,0,0,0,.06,1,7.434,7.434,0,0,1,.061,2.359,11.641,11.641,0,0,1-.365,1.383c-.121.345.284.366.122.529s-.1.569-.1,1.22a19.2,19.2,0,0,1-.406,2.095c-.02.346-.283.57-.243.956a.867.867,0,0,1-.4.793c-.223.183.365.773.344,1.1s-.446.467-.344,1a10.438,10.438,0,0,1,0,2.014c0,.223-.264.2-.2.63s-.263.529-.325,1.139a8.841,8.841,0,0,1-.709,1.953c-.182.467-.182.732-.425.732s-.3.264-.122.671-.122.752.122,1.159.162.549.04.936-.284.407-.284.773-.283.671-.121,1.078.121.548-.081.548-.3.326-.385,1-.06.651.425.61.1-1.647.406-1.647.04-.264.344-.346.04.285.243.346c-.222.589.122.956-.021,1.18s-.344.467-.222.732-.141.244-.162.59.182.366.04.447a.889.889,0,0,0,.02.936c.122.244-.263.1-.466.264s.2.386.081.611-.446-.123-.587-.245.222-.366.4-.61-.182-.793-.486-.671.3.468.3.733-.506-.061-.486.223-.345.182-.528.386.244.386.041.448-.547.345-.568.548c.223-.162.547-.223.649.041s.243,0,.527.061.244.488.081.467-.324.264-.284.57.609,0,.851.081c-.122.223-.446-.02-.587.223s-.365.122-.547.041-.831.345-.609.508.2.427.345.407a.639.639,0,0,0,.446-.285c.081-.163.365-.325.384.041s-.384.183-.465.386a1.359,1.359,0,0,1-.487.549.219.219,0,0,0,.2.386c.484.322.567.122.506-.082s.142-.651.385-.426-.122.447-.122.651-.142.467-.142.691-.263.1-.244.346-.567.081-.3.244-.162.386-.02.549.263-.224.487-.142.182.142.466.02c-.082.386-.365.691-.244.732s.466-.2.547.061a.529.529,0,0,1,.892.1c.082.244-.506.386-.811.325s-.466.285-.263.549.446,0,.669-.223,1.317-.163,1.4.081-.507.041-.568.183-.507.264-.568.1-.487.061-.506.326c.384.467.283-.02.851.02s.872-.528,1.034-.2-.466.59-.69.386-.486.142-.465.448-.649-.082-.974-.122-.182.3.1.61.446-.041.79.182.345.468.588.245c-.324-.407-.182-.753.2-.57a.525.525,0,0,0,.709-.651c-.122-.488.344-.712.811-.874s.223.3-.122.447-.4.244-.141.529.608-.182.831.041-.406.183-.507.407.385.488.041.651-.182-.671-.385-.752-.385.1-.182.569-.243.061-.446-.163-.487.1-.243.346-.466-.02-.466.366.3.061.669.142.2.61.465.814.041-.651.325-.712.02.651.649.855.04-.122.324-.326.649.61.953.692.1-.366-.122-.61.223-.1.527,0,.547.142.609-.082c.273-.02.44.079.567-.061.2-.224.812-.1,1.135-.305s-.1-.264-.608-.285-1.5-.956-1.8-1.2-.081-.488-.446-.426c.268-.481.009-.828-.238-.884-.328-.012-.917.05-.815-.357.341-.24.856.1.973-.02.142-.142-.506-.671-.486-.854s-.1-.489-.1-.692-.1-.651.182-.855.3-.406.486-.366.547-.163.568-.651.243-.671.649-1.017c.441-.377,1.175-.732,1.074-.895s.162-.692.162-.895-.689-.163-.912-.245-1.033-.651-.628-1.4a1.814,1.814,0,0,1,1.5-.854c.243-.02.02-.367.222-.489s.244-.325.244-.63c0-.345,0-.895.365-.936.021-.366-.081-.63.284-.671s.243.305.506.305.709-.448.365-.712-.446.123-.628.163-.324-.244-.506-.244-.061-.508-.142-.692-.2-.63-.041-.854.852.345,1.46.386,1.054-.305,1.054-.529-.284-.63.081-.874.061-.326-.041-.651.163-.529.325-.367a5.5,5.5,0,0,0,2.351-.142c.993-.2,1.683-.57,1.743-.855a7.921,7.921,0,0,1,.831-1.2c.141-.244.021-.549-.385-.61s-.385-.529-.162-.793-.122-.508-.506-.549-.994-.305-.649-.63c.414.022.5.143.689.122a2.294,2.294,0,0,1,1.176.305c.446.2.284-.061.71,0a1.969,1.969,0,0,0,1.377-.183,3.117,3.117,0,0,0,.73-.857,1.986,1.986,0,0,1,.426-.424c.567-.407.425-.651.689-1.14s.041-.691.487-1.118-.081-.712.486-.977.487.245.02.834c.669-.142.893-.773,1.237-1.485s.608-.935.912-.976.3-.793.263-1.322-.2-1.017.02-1.363,0-.671.283-.671.71-.426,1.156-.874a1.563,1.563,0,0,1,1.2-.529c.466-.041.2-.2.506-.285s.507-.366.709-.549,1.034.02,1.521.02.811.041.811-.264a.526.526,0,0,1,.506-.549c.284,0,.406-.081.406-.488a.935.935,0,0,1,.365-.833c.243-.183.284-.59.365-.855s.344-.1.344-.488.141-.814.141-1.119.325-.264.466-.488-.121-.508.1-1.139a4.823,4.823,0,0,0,0-1.79c0-.569,0-1.159.2-1.342-.223-.448-.04-.671.1-.63s.3.345.568.183a3.8,3.8,0,0,0,.73-1.423c.223-.57.587-.549.871-.671a3.708,3.708,0,0,0,1.277-1.81,4.279,4.279,0,0,0-.182-2.664c-.162-.692-.385-.549-.79-.529A2.811,2.811,0,0,1,119.19-104.17ZM88.271-124.5l.069.036c.324.163.406-.163,1.135-.407s1.905.2,1.905-.366-1.946-1.18-2.433-1.017a.93.93,0,0,1-.5-.029c-.513-.132-1.153-.464-1.448-.255-.406.285.608.895.608,1.261s-1.627-.069-1.783.326c-.082.2.567.488,1.175.285A1.491,1.491,0,0,1,88.271-124.5Zm74.969-25.725c-.149-.013-.19.257-.568.488s0,1.272.378,1.221C163.442-148.574,163.388-150.215,163.24-150.228Z"
//             transform="translate(465.764 1003.012)"
//           />
//           <g transform="translate(510 818)">
//             <path
//               className="al"
//               d="M8,0A6.957,6.957,0,0,0,1,7a6.722,6.722,0,0,0,2.1,5c.1.1,4.1,3.7,4.2,3.8a1.049,1.049,0,0,0,1.3,0c.1-.1,4.2-3.7,4.2-3.8a6.722,6.722,0,0,0,2.1-5A6.812,6.812,0,0,0,8,0ZM8,9a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,9Z"
//             />
//           </g>
//           <g transform="translate(549 883)">
//             <path
//               className="am"
//               d="M8,0A6.957,6.957,0,0,0,1,7a6.722,6.722,0,0,0,2.1,5c.1.1,4.1,3.7,4.2,3.8a1.049,1.049,0,0,0,1.3,0c.1-.1,4.2-3.7,4.2-3.8a6.722,6.722,0,0,0,2.1-5A6.812,6.812,0,0,0,8,0ZM8,9a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,9Z"
//               transform="translate(10 10)"
//             />
//           </g>
//           <g transform="translate(640 851)">
//             <path
//               className="an"
//               d="M8,0A6.957,6.957,0,0,0,1,7a6.722,6.722,0,0,0,2.1,5c.1.1,4.1,3.7,4.2,3.8a1.049,1.049,0,0,0,1.3,0c.1-.1,4.2-3.7,4.2-3.8a6.722,6.722,0,0,0,2.1-5A6.812,6.812,0,0,0,8,0ZM8,9a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,9Z"
//             />
//           </g>
//           <g transform="translate(700 848)">
//             <path
//               className="ao"
//               d="M8,0A6.957,6.957,0,0,0,1,7a6.722,6.722,0,0,0,2.1,5c.1.1,4.1,3.7,4.2,3.8a1.049,1.049,0,0,0,1.3,0c.1-.1,4.2-3.7,4.2-3.8a6.722,6.722,0,0,0,2.1-5A6.812,6.812,0,0,0,8,0ZM8,9a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,9Z"
//             />
//           </g>
//           <g transform="translate(730 904)">
//             <path
//               className="ap"
//               d="M8,0A6.957,6.957,0,0,0,1,7a6.722,6.722,0,0,0,2.1,5c.1.1,4.1,3.7,4.2,3.8a1.049,1.049,0,0,0,1.3,0c.1-.1,4.2-3.7,4.2-3.8a6.722,6.722,0,0,0,2.1-5A6.812,6.812,0,0,0,8,0ZM8,9a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,9Z"
//             />
//           </g>
//           <g transform="translate(708 802)">
//             <path
//               className="aq"
//               d="M8,0A6.957,6.957,0,0,0,1,7a6.722,6.722,0,0,0,2.1,5c.1.1,4.1,3.7,4.2,3.8a1.049,1.049,0,0,0,1.3,0c.1-.1,4.2-3.7,4.2-3.8a6.722,6.722,0,0,0,2.1-5A6.812,6.812,0,0,0,8,0ZM8,9a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,9Z"
//             />
//           </g>
//         </g>
//         <text className="ar" transform="translate(795 656)">
//           <tspan x={-74.382} y={0}>
//             {"Show All List"}
//           </tspan>
//         </text>
//         <text className="as" transform="translate(465 660)">
//           <tspan x={0} y={0}>
//             {"Details on Map"}
//           </tspan>
//         </text>
//       </g>
//       <g className="at" transform="translate(279.5)">
//         <rect className="ba" width={1640.5} height={70} />
//         <rect className="bb" x={-0.5} y={-0.5} width={1641.5} height={71} />
//       </g>
//       <g transform="translate(1636 17)">
//         <circle className="au" cx={17.5} cy={17.5} r={17.5} />
//         <path
//           className="av"
//           d="M1234.16,20.047v6.768a3.142,3.142,0,0,1-.89,2.3,3.534,3.534,0,0,1-2.38,1l-.34.014a3.743,3.743,0,0,1-2.61-.882,3.144,3.144,0,0,1-.98-2.427V20.047h1.3v6.74a2.272,2.272,0,0,0,.59,1.682,2.294,2.294,0,0,0,3.99-1.675V20.047Zm6.18,7.991a.919.919,0,0,0-.39-.793,3.571,3.571,0,0,0-1.34-.492,6.488,6.488,0,0,1-1.53-.492,2.2,2.2,0,0,1-.83-.684,1.635,1.635,0,0,1-.27-.943,1.927,1.927,0,0,1,.77-1.538,3,3,0,0,1,1.96-.629,3.083,3.083,0,0,1,2.04.649,2.046,2.046,0,0,1,.79,1.661h-1.27a1.134,1.134,0,0,0-.45-.9,1.637,1.637,0,0,0-1.11-.376,1.73,1.73,0,0,0-1.08.3.965.965,0,0,0-.38.786.768.768,0,0,0,.36.69,4.37,4.37,0,0,0,1.3.444,6.689,6.689,0,0,1,1.54.506,2.239,2.239,0,0,1,.87.711,1.72,1.72,0,0,1,.29,1,1.905,1.905,0,0,1-.8,1.593,3.325,3.325,0,0,1-2.05.595,3.751,3.751,0,0,1-1.58-.314,2.621,2.621,0,0,1-1.07-.875,2.183,2.183,0,0,1-.38-1.224h1.26a1.3,1.3,0,0,0,.51,1.012,2.368,2.368,0,0,0,2.4.082A.884.884,0,0,0,1240.34,28.038Zm5.98,2.1a3.211,3.211,0,0,1-2.44-.984,3.677,3.677,0,0,1-.95-2.646v-.232a4.42,4.42,0,0,1,.42-1.962,3.215,3.215,0,0,1,1.18-1.354,2.937,2.937,0,0,1,1.64-.492,2.763,2.763,0,0,1,2.24.95,4.132,4.132,0,0,1,.8,2.721v.526h-5.01a2.687,2.687,0,0,0,.63,1.771,2.026,2.026,0,0,0,1.56.67,2.215,2.215,0,0,0,1.14-.273,2.806,2.806,0,0,0,.81-.725l.77.6A3.107,3.107,0,0,1,1246.32,30.137Zm-.15-6.631a1.7,1.7,0,0,0-1.29.561,2.653,2.653,0,0,0-.64,1.559h3.7v-.1a2.354,2.354,0,0,0-.52-1.49A1.58,1.58,0,0,0,1246.17,23.506Zm8.08.232a3.78,3.78,0,0,0-.62-.048,1.671,1.671,0,0,0-1.69,1.06V30h-1.26V22.6h1.23l.02.854a1.959,1.959,0,0,1,1.76-.991,1.255,1.255,0,0,1,.56.1Zm2.37-1.135.04.93a2.681,2.681,0,0,1,2.21-1.066q2.355,0,2.37,2.646V30h-1.27V25.105a1.677,1.677,0,0,0-.36-1.183,1.466,1.466,0,0,0-1.12-.383,1.825,1.825,0,0,0-1.08.328,2.189,2.189,0,0,0-.72.861V30h-1.27V22.6Zm11.09,7.4a2.626,2.626,0,0,1-.17-.779,2.828,2.828,0,0,1-2.11.916,2.638,2.638,0,0,1-1.8-.615,2.034,2.034,0,0,1-.7-1.572,2.1,2.1,0,0,1,.88-1.791,4.134,4.134,0,0,1,2.47-.643h1.23v-.581a1.422,1.422,0,0,0-.39-1.053,1.6,1.6,0,0,0-1.17-.4,1.872,1.872,0,0,0-1.14.342,1.012,1.012,0,0,0-.45.827h-1.28a1.74,1.74,0,0,1,.39-1.066,2.729,2.729,0,0,1,1.07-.82,3.617,3.617,0,0,1,1.48-.3,2.932,2.932,0,0,1,2.01.643,2.31,2.31,0,0,1,.75,1.757v3.4a4.221,4.221,0,0,0,.26,1.62V30Zm-2.1-.964a2.206,2.206,0,0,0,1.13-.308,1.779,1.779,0,0,0,.77-.8V26.411h-.99c-1.55,0-2.32.453-2.32,1.36a1.137,1.137,0,0,0,.4.93A1.5,1.5,0,0,0,1265.61,29.036Zm6.34-6.433.04.82a2.721,2.721,0,0,1,2.19-.957,2.112,2.112,0,0,1,2.11,1.189,2.751,2.751,0,0,1,2.36-1.189c1.62,0,2.45.859,2.47,2.577V30h-1.26V25.119a1.692,1.692,0,0,0-.36-1.183,1.592,1.592,0,0,0-1.22-.4,1.671,1.671,0,0,0-1.17.424,1.691,1.691,0,0,0-.54,1.128V30h-1.27V25.153a1.413,1.413,0,0,0-1.58-1.613,1.684,1.684,0,0,0-1.7,1.06V30h-1.27V22.6Zm14.16,7.533a3.249,3.249,0,0,1-2.45-.984,3.672,3.672,0,0,1-.94-2.646v-.232a4.559,4.559,0,0,1,.41-1.962,3.357,3.357,0,0,1,1.18-1.354,2.96,2.96,0,0,1,1.64-.492,2.763,2.763,0,0,1,2.24.95,4.077,4.077,0,0,1,.8,2.721v.526h-5.01a2.642,2.642,0,0,0,.64,1.771,2.026,2.026,0,0,0,1.56.67,2.2,2.2,0,0,0,1.13-.273,2.806,2.806,0,0,0,.81-.725l.78.6A3.107,3.107,0,0,1,1286.11,30.137Zm-.16-6.631a1.662,1.662,0,0,0-1.28.561,2.722,2.722,0,0,0-.65,1.559h3.71v-.1a2.414,2.414,0,0,0-.52-1.49A1.586,1.586,0,0,0,1285.95,23.506Z"
//           transform="translate(-1176 -8)"
//         />
//         <path
//           className="av"
//           d="M1304.61,29.536l-4.45-4.855a.649.649,0,0,1,0-.848l.52-.566a.522.522,0,0,1,.78,0l3.54,3.848,3.54-3.848a.522.522,0,0,1,.78,0l.52.566a.649.649,0,0,1,0,.848l-4.45,4.855A.521.521,0,0,1,1304.61,29.536Z"
//           transform="translate(-1176 -8)"
//         />
//       </g>
//       <line className="aw" y2={69.5} transform="translate(1856)" />
//       <line className="aw" y2={69.5} transform="translate(1792)" />
//       <path
//         className="au"
//         d="M1421.74,27.956l-1.79-1.036a8.161,8.161,0,0,0,0-2.957l1.79-1.036a.518.518,0,0,0,.24-.59,10.541,10.541,0,0,0-2.31-3.985.5.5,0,0,0-.62-.1l-1.8,1.036a7.9,7.9,0,0,0-2.56-1.479V15.746a.5.5,0,0,0-.39-.493,10.59,10.59,0,0,0-4.6,0,.51.51,0,0,0-.4.493v2.072a8.274,8.274,0,0,0-2.56,1.479l-1.79-1.036a.5.5,0,0,0-.62.1,10.477,10.477,0,0,0-2.31,3.985.506.506,0,0,0,.24.59l1.79,1.036a8.161,8.161,0,0,0,0,2.957l-1.79,1.036a.518.518,0,0,0-.24.59,10.542,10.542,0,0,0,2.31,3.985.5.5,0,0,0,.62.1l1.8-1.036a7.9,7.9,0,0,0,2.56,1.478v2.072a.5.5,0,0,0,.39.493,10.592,10.592,0,0,0,4.6,0,.51.51,0,0,0,.4-.493V33.074a8.274,8.274,0,0,0,2.56-1.478l1.79,1.036a.509.509,0,0,0,.63-.1,10.457,10.457,0,0,0,2.3-3.985A.522.522,0,0,0,1421.74,27.956Zm-9.74.855a3.37,3.37,0,1,1,3.37-3.37A3.373,3.373,0,0,1,1412,28.812Z"
//         transform="translate(476 9)"
//       />
//       <g className="ax" transform="translate(1814 23)">
//         <path
//           className="au"
//           d="M1356,36.857A2.858,2.858,0,0,0,1358.86,34h-5.72A2.858,2.858,0,0,0,1356,36.857Zm9.61-6.683c-.86-.927-2.47-2.321-2.47-6.888a7.048,7.048,0,0,0-5.71-6.927v-.93a1.43,1.43,0,0,0-2.86,0v.93a7.048,7.048,0,0,0-5.71,6.927c0,4.567-1.61,5.961-2.48,6.888a1.428,1.428,0,0,0,1.05,2.4h17.14a1.433,1.433,0,0,0,1.43-1.428A1.4,1.4,0,0,0,1365.61,30.174Z"
//           transform="translate(-1346 -14)"
//         />
//       </g>
//       <text className="ay" transform="translate(314 43)">
//         <tspan x={0} y={0}>
//           {"Pastas"}
//         </tspan>
//       </text>
//       <line className="az" x2={160} transform="translate(280.5 69.5)" />
//     </g>
//   </svg>
// );

// export default AdminDashboard;