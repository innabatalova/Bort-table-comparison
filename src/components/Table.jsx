import React from 'react';

import Wrapper from './Wrapper';
import Model from './Model';
import Title from './Title';
import Item from './Item';
import NoIcon from './NoIcon';
import YesIcon from './YesIcon';

const Table = () => {
  return (
    <div className='comparison'>
      <Wrapper title={<div className="comparison-title">МОЙКИ ВЫСОКОГО ДАВЛЕНИЯ СЕРИИ KEX</div>}
        data={
          [<Model src='https://bort-global.ru/images/detailed/629/97004cc1-9277-11e9-a62c-a4bf01648335.jpg'
            href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-kex-2500/'
            model='KEX-2500' />,
            <Model src='https://bort-global.ru/images/detailed/1208/2216f7ea-c185-11ed-a95b-a4bf01842533_bj0j-5o.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-kex-2700-r/'
            model='KEX-2700-R' />,
            <Model src='https://bort-global.ru/images/detailed/629/637cb71a-d22b-11ed-a95b-a4bf01842533_6nkl-v7.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-kex-3000/'
            model='KEX-3000' />,
            <Model src='https://bort-global.ru/images/detailed/629/72383320-d22e-11ed-a95b-a4bf01842533_e17a-j0.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-kex-3500/'
            model='KEX-3500' />]
        } />

      <Wrapper title={<Title text='Максимальное давление, бар'/>} 
        data={[<Item data='180' />, <Item data='190' />, <Item data='190' />, <Item data='190' />]}/>

      <Wrapper title={<Title text='Рабочее давление, бар' />}
        data={[<Item data='160' />, <Item data='150' />, <Item data='160' />, <Item data='170' />]} />

      <Wrapper title={<Title text='Потребляемая мощность, Вт' />}
        data={[<Item data='2400' />, <Item data='2500' />, <Item data='2700' />, <Item data='3400' />]} />

      <Wrapper title={<Title text='Максимальная производительность, л/час' />}
        data={[<Item data='480' />, <Item data='480' />, <Item data='600' />, <Item data='700' />]} />

      <Wrapper title={<Title text='Шланг,м' />}
        data={[<Item data='10' />, <Item data='10' />, <Item data='10' />, <Item data='10' />]} />

      <Wrapper title={<Title text='Длина шнура питания, м' />}
        data={[<Item data='5' />, <Item data='5' />, <Item data='5' />, <Item data='5' />]} />

      <Wrapper title={<Title text='Вес, кг' />}
        data={[<Item data='16.5' />, <Item data='19.4' />, <Item data='21.75' />, <Item data='22.75' />]} />

      <Wrapper title={<Title text='Тип мотора' />}
        data={[<Item data='Индукционный' />, <Item data='Индукционный' />, <Item data='Индукционный' />, <Item data='Индукционный' />]} />
      
      <Wrapper title={<Title text='Система охлаждения' />}
        data={[<Item data='Водяная' />, <Item data='Воздушная' />, <Item data='Комбинированная' />, <Item data='Комбинированная' />]} />
      <Wrapper title={<Title text='Встроенный бачок для моющего средства' />}
        data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />]} />
      <Wrapper title={<Title text='Автоматическое всасывание' />}
        data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />]} />
      <Wrapper title={<Title text='Защита от перегрева' />}
        data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />]} />

    </div>
  );

}

export default Table;