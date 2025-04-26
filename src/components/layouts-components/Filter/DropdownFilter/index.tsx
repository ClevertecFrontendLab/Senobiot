// import {
//   VStack,
// } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import { CheckBoxLime, SelectRegular } from '~/components/shared-components';

// export const DropdownFilter: React.FC<{ data: string[] }> = ({ data = []}) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState<string[]>([]);
//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const toggleelection = (selected: string) => {
//     setSelected((prev) =>
//       prev.includes(selected) ? prev.filter((item) => item !== selected) : [...prev, selected],
//     );
//   };

//   return (
//     <VStack>
//       <SelectRegular
//         placeholder='Категория'
//         isOpen={isOpen}
//         toggleDropdown={toggleDropdown}
//         onReset={() => setSelected([])}
//       />
//       {isOpen && <VStack align='start'>
//         {data.map((e, index) => (
//           <CheckBoxLime
//           key={index}
//             index={index}
//             item={e}
//             isChecked={selected.includes(e)}
//             toggleItem={toggleelection}
//           // dataTestIds={index}
//           // dataTestkey='allergen-'
//           />
//         ))}
//       </VStack>}
//     </VStack>
//   )
// }
