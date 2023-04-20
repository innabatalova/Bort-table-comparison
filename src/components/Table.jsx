import React from 'react';

import Wrapper from './Wrapper';
import Model from './Model';
import Title from './Title';
import Item from './Item';
import NoIcon from './NoIcon';
import YesIcon from './YesIcon';

const Table = () => {
  return (
    <>
    <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">МОЙКИ ВЫСОКОГО ДАВЛЕНИЯ СЕРИИ BHR</div>}
        classHeadTitle='comparison-wrapper__title_head'
        classHeadData='comparison-wrapper__data_head'
        data={
          [<Model src='https://bort-global.ru/images/detailed/132/f2d6c8e3-68cb-11e8-aeca-001517e6c84d.jpg'
            href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-bhr-1600/'
            model='BHR-1600' />,
            <Model src='https://bort-global.ru/images/detailed/1208/2f09f8a7-6658-11ed-a957-a4bf01842533_3m1l-t8.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-bhr-1600-compact/'
              model='BHR-1600-COMPACT' />,
            <Model src='https://bort-global.ru/images/detailed/1208/1098247f-c186-11ed-a95b-a4bf01842533_aigj-8q.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-bhr-1700-pro/'
              model='BHR-1700-Pro' />,
            <Model src='https://bort-global.ru/images/detailed/574/74f2c25c-adf1-11ed-a95b-a4bf01842533_ae2o-cq.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-bhr-2000-pro/'
              model='BHR-2000-Pro' />,
            <Model src='https://bort-global.ru/images/detailed/1208/e411e040-c185-11ed-a95b-a4bf01842533_31bm-5l.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-bhr-2000m-pro/'
              model='BHR-2000M-Pro' />]
        } />

      <Wrapper title={<Title text='Максимальное давление, бар'/>} 
          data={[<Item data='120' />, <Item data='120' />, <Item data='120' />, <Item data='150' />, <Item data='150' />]}/>

      <Wrapper title={<Title text='Рабочее давление, бар' />}
          data={[<Item data='90' />, <Item data='90' />, <Item data='90' />, <Item data='130' />, <Item data='120' />]} />

      <Wrapper title={<Title text='Потребляемая мощность, Вт' />}
          data={[<Item data='1600' />, <Item data='1600' />, <Item data='1600' />, <Item data='2000' />, <Item data='2000' />]} />

      <Wrapper title={<Title text='Максимальная производительность, л/час' />}
          data={[<Item data='420' />, <Item data='420' />, <Item data='420' />, <Item data='450' />, <Item data='450' />]} />

      <Wrapper title={<Title text='Шланг,м' />}
          data={[<Item data='4' />, <Item data='5' />, <Item data='4' />, <Item data='8' />, <Item data='8' />]} />

      <Wrapper title={<Title text='Длина шнура питания, м' />}
          data={[<Item data='4' />, <Item data='5' />, <Item data='4' />, <Item data='5' />, <Item data='5' />]} />

      <Wrapper title={<Title text='Вес, кг' />}
          data={[<Item data='5' />, <Item data='5.3' />, <Item data='4' />, <Item data='7' />, <Item data='6.4' />]} />

      <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Коллекторный'/>, <Item data='Коллекторный' classHidden='comparison-data__item_hidden'/>, 
            <Item data='Коллекторный' classHidden='comparison-data__item_hidden' />, <Item data='Коллекторный' classHidden='comparison-data__item_hidden' />,
            <Item data='Коллекторный' classHidden='comparison-data__item_hidden' />]} />
      
      <Wrapper title={<Title text='Система охлаждения' />}
          data={[<Item data='Воздушная'/>, <Item data='Воздушная' classHidden='comparison-data__item_hidden' />, 
            <Item data='Воздушная' classHidden='comparison-data__item_hidden' />, 
            <Item data='Воздушная' classHidden='comparison-data__item_hidden' />,
            <Item data='Воздушная' classHidden='comparison-data__item_hidden' />]} />

      <Wrapper title={<Title text='Автоматическое всасывание' />}
        data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          <Item data={<YesIcon />} />]} />

      <Wrapper title={<Title text='Защита от перегрева' />}
        data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          <Item data={<YesIcon />} />]} />

    </div>
      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">МОЙКИ ВЫСОКОГО ДАВЛЕНИЯ СЕРИИ BHR</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [
            <Model src='https://bort-global.ru/images/detailed/1146/4c9050a4-7692-11eb-9ebd-a4bf01648335_ufjt-me.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-bhr-2000-smart/'
              model='BHR-2000-Smart' />,
            <Model src='https://bort-global.ru/images/detailed/1208/907cec0e-c185-11ed-a95b-a4bf01842533_z3v0-z9.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-bhr-2300-pro/'
              model='BHR-2300-Pro' />,
            <Model src='https://bort-global.ru/images/detailed/896/0e8ff2ae-adf2-11ed-a95b-a4bf01842533_iw0t-4t.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bhr-2500r-pro/'
              model='BHR-2500R-Pro' />,
            <Model src='https://bort-global.ru/images/detailed/1208/62a8a647-c185-11ed-a95b-a4bf01842533_04hz-pb.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-bhr-2700-pro/'
              model='BHR-2700-Pro' />,
            <Model src='https://bort-global.ru/images/detailed/1208/44fa0e94-c185-11ed-a95b-a4bf01842533_6ycs-v0.jpg'
              href='https://bort-global.ru/klining/moyki-vysokogo-davleniya/moyka-vysokogo-davleniya-bort-bhr-2700-r/'
              model='BHR-2700-R' />]
          } />

        <Wrapper title={<Title text='Максимальное давление, бар' />}
          data={[<Item data='160' />, <Item data='170' />, <Item data='180' />, <Item data='180' />, <Item data='180' />]} />

        <Wrapper title={<Title text='Рабочее давление, бар' />}
          data={[<Item data='130' />, <Item data='130' />, <Item data='150' />, <Item data='140' />, <Item data='140' />]} />

        <Wrapper title={<Title text='Потребляемая мощность, Вт' />}
          data={[<Item data='2000' />, <Item data='2300' />, <Item data='2400' />, <Item data='2500' />, <Item data='2500' />]} />

        <Wrapper title={<Title text='Максимальная производительность, л/час' />}
          data={[<Item data='420' />, <Item data='480' />, <Item data='450' />, <Item data='480' />, <Item data='480' />]} />

        <Wrapper title={<Title text='Шланг,м' />}
          data={[<Item data='8' />, <Item data='8' />, <Item data='10' />, <Item data='10' />, <Item data='10' />]} />

        <Wrapper title={<Title text='Длина шнура питания, м' />}
          data={[<Item data='5' />, <Item data='5' />, <Item data='5' />, <Item data='5' />, <Item data='5' />]} />

        <Wrapper title={<Title text='Вес, кг' />}
          data={[<Item data='8.5' />, <Item data='7.4' />, <Item data='8.9' />, <Item data='9.9' />, <Item data='10.1' />]} />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Коллекторный' />, <Item data='Коллекторный' classHidden='comparison-data__item_hidden' />, 
          <Item data='Коллекторный' classHidden='comparison-data__item_hidden'/>, 
          <Item data='Коллекторный' classHidden='comparison-data__item_hidden'/>,
          <Item data='Коллекторный' classHidden='comparison-data__item_hidden'/>]} />

        <Wrapper title={<Title text='Система охлаждения' />}
          data={[<Item data='Воздушная' />, <Item data='Воздушная' classHidden='comparison-data__item_hidden' />, 
          <Item data='Воздушная' classHidden='comparison-data__item_hidden'/>, 
          <Item data='Воздушная' classHidden='comparison-data__item_hidden'/>,
          <Item data='Воздушная' classHidden='comparison-data__item_hidden'/>]} />

        <Wrapper title={<Title text='Автоматическое всасывание' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          <Item data={<YesIcon />} />, <Item data={<YesIcon />} />]} />

        <Wrapper title={<Title text='Защита от перегрева' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          <Item data={<YesIcon />} />, <Item data={<YesIcon />} />]} />

      </div>
    <div className='comparison'>
      <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">МОЙКИ ВЫСОКОГО ДАВЛЕНИЯ СЕРИИ KEX</div>}
        classHeadTitle='comparison-wrapper__title_head'
        classHeadData='comparison-wrapper__data_head'
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
          data={[<Item data='Индукционный' />, <Item data='Индукционный' classHidden='comparison-data__item_hidden' 
          />, <Item data='Индукционный' classHidden='comparison-data__item_hidden' />, 
            <Item data='Индукционный' classHidden='comparison-data__item_hidden' />]} />
      
      <Wrapper title={<Title text='Система охлаждения' />}
        data={[<Item data='Водяная' />, <Item data='Воздушная' />, <Item data='Комбинированная' />, <Item data='Комбинированная' />]} />

      <Wrapper title={<Title text='Автоматическое всасывание' />}
        data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />]} />
      <Wrapper title={<Title text='Защита от перегрева' />}
        data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />]} />

    </div>
    </>
  );

}

export default Table;