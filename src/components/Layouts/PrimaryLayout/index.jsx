// import { Breadcrumb, Menu } from "antd";
// import { useState } from "react";
// import "./index.css";

// const items = [
//     {
//         key: '1',
//         label: 'Navigation One',
//         children: [
//             {
//                 key: '11',
//                 label: 'Option 1',
//             },
//             {
//                 key: '12',
//                 label: 'Option 2',
//             },
//             {
//                 key: '13',
//                 label: 'Option 3',
//             },
//             {
//                 key: '14',
//                 label: 'Option 4',
//             },
//         ],
//     },
//     {
//         key: '2',
//         label: 'Navigation Two',
//         children: [
//             {
//                 key: '21',
//                 label: 'Option 1',
//             },
//             {
//                 key: '22',
//                 label: 'Option 2',
//             },
//         ],
//     },
//     {
//         key: '3',
//         label: 'Navigation Three',
//         children: [
//             {
//                 key: '31',
//                 label: 'Option 1',
//             },
//             {
//                 key: '32',
//                 label: 'Option 2',
//             },
//             {
//                 key: '33',
//                 label: 'Option 3',
//             },
//             {
//                 key: '34',
//                 label: 'Option 4',
//             },
//         ],
//     },
// ];
// const getLevelKeys = (items1) => {
//     const key = {};
//     const func = (items2, level = 1) => {
//         items2.forEach((item) => {
//             if (item.key) {
//                 key[item.key] = level;
//             }
//             if (item.children) {
//                 func(item.children, level + 1);
//             }
//         });
//     };
//     func(items1);
//     return key;
// };
// const levelKeys = getLevelKeys(items);

// const PrimaryLayout = () => {
//     const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
//     const onOpenChange = (openKeys) => {
//         const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
//         // open
//         if (currentOpenKey !== undefined) {
//             const repeatIndex = openKeys
//                 .filter((key) => key !== currentOpenKey)
//                 .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
//             setStateOpenKeys(
//                 openKeys
//                     // remove repeat key
//                     .filter((_, index) => index !== repeatIndex)
//                     // remove current level all child
//                     .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
//             );
//         } else {
//             // close
//             setStateOpenKeys(openKeys);
//         }
//     };

//     return (
//         <div className="flex flex-col max-w-[1280px] px-[72px]">
//             <Breadcrumb 
//                 items={[
//                     {
//                         title: 'Home',
//                     },
//                     {
//                         title: <a href="">Application Center</a>,
//                     },
//                     {
//                         title: <a href="">Application List</a>,
//                     },
//                     {
//                         title: 'An Application',
//                     },
//                 ]}
//                 className="px-6 mb-4"
//             />
//             <Menu
//                 mode="inline"
//                 defaultSelectedKeys={['231']}
//                 openKeys={stateOpenKeys}
//                 onOpenChange={onOpenChange}
//                 style={{
//                     width: 256,
//                 }}
//                 items={items}
//                 className="m-3 border rounded-xl"
//             />
//         </div>
//     );
// }

// export default PrimaryLayout;