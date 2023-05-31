import React from 'react';

import Wrapper from './Wrapper';
import Model from './Model';
import Title from './Title';
import Item from './Item';
import NoIcon from './NoIcon';
import YesIcon from './YesIcon';

const TableSteam = () => {
  return (
    <>
      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">ПАРООЧИСТИТЕЛИ СЕРИИ BDR</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src='https://bort-global.ru/photo/product/93412871'
              href='https://bort-global.ru/klining/paroochistiteli/paroochistitel-bort-bdr-1200/'
              model='BDR-1200' />,
              <Model src='https://bort-global.ru/photo/product/93410747'
              href='https://bort-global.ru/klining/paroochistiteli/paroochistitel-bort-bdr-1500-rr/'
              model='BDR-1500-RR' />,
              <Model src='https://bort-global.ru/photo/product/93722609'
              href='https://bort-global.ru/klining/paroochistiteli/paroochistitel-bort-bdr-2300-r/'
              model='BDR-2300-R' />,
              <Model src='https://bort-global.ru/photo/product/91279910'
              href='https://bort-global.ru/klining/paroochistiteli/paroochistitel-bdr-2500-rr/'
              model='BDR-2500-RR' />,
              <Model src='https://bort-global.ru/photo/product/93410075'
              href='https://bort-global.ru/klining/paroochistiteli/paroochistitel-bort-bdr-2500-rr-iron/'
              model='BDR-2500-RR (Iron)' />]
          } />

        <Wrapper title={<Title text='Вид пароочистителя' />}
          data={[<Item data='Ручной' />, <Item data='Ручной' />, <Item data='Напольный' />, <Item data='Напольный' />, <Item data='Напольный' />,
          ]} />
        <Wrapper title={<Title text='Мощность, Вт' />}
          data={[<Item data='1200' />, <Item data='1500' />, <Item data='2100' />, <Item data='2200' />, <Item data='2300' />,
          ]} />
        <Wrapper title={<Title text='Максимальное давление, бар' />}
          data={[<Item data='3.2' />, <Item data='3' />, <Item data='4' />, <Item data='4' />, <Item data='4' />,
          ]} />
        <Wrapper title={<Title text='Постоянная подача пара, г/мин' />}
          data={[<Item data='35' />, <Item data='35' />, <Item data='45' />, <Item data='45' />, <Item data='45' />,
          ]} />
        <Wrapper title={<Title text='Температура пара , °С' />}
          data={[<Item data='133' />, <Item data='133' />, <Item data='143' />, <Item data='143' />, <Item data='143' />,
          ]} />
        <Wrapper title={<Title text='Объем бойлера, л' />}
          data={[<Item data='0.35' />, <Item data='Прямоточная система нагрева' />, <Item data='1.5' />, <Item data='0.6' />, <Item data='0.6' />,
          ]} />
        <Wrapper title={<Title text='Емкость бачка, мл' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data='1500' />, <Item data='1500' />,
          ]} />
        <Wrapper title={<Title text='Время нагревания, с' />}
          data={[<Item data='180' />, <Item data='180' />, <Item data='360' />, <Item data='120' />, <Item data='200' />,
          ]} />
        <Wrapper title={<Title text='Время непрерывной работы, мин' />}
          data={[<Item data='12' />, <Item data='10' />, <Item data='35' />, <Item data='35' />, <Item data='35' />,
          ]} />
        <Wrapper title={<Title text='Длина шланга, м' />}
          data={[<Item data='0.55' />, <Item data='0.55' />, <Item data='1.5' />, <Item data='1.5' />, <Item data='1.4' />,
          ]} />
        <Wrapper title={<Title text='Длина шнура питания, м' />}
          data={[<Item data='3' />, <Item data='3' />, <Item data='2.7' />, <Item data='2.7' />, <Item data='2.7' />,
          ]} />
        <Wrapper title={<Title text='Размер, мм' />}
          data={[<Item data='266 x 155 x 235' />, <Item data='300 x 125 x 245' />, <Item data='400 x 285 x 260' />, <Item data='400 x 285 x 260' />, <Item data='400 x 285 x 260' />,
          ]} />
        <Wrapper title={<Title text='Вес изделия, кг' />}
          data={[<Item data='1.8' />, <Item data='1.8' />, <Item data='4.7' />, <Item data='4.7' />, <Item data='5.5' />,
          ]} />
        <Wrapper title={<Title text='Использование без химии' />}
          data={[<Item data={<YesIcon/>} />, <Item data={<YesIcon/>} />, <Item data={<YesIcon/>} />, <Item data={<YesIcon/>} />, <Item data={<YesIcon/>} />,
          ]} />
        <Wrapper title={<Title text='Предохранительный клапан' />}
          data={[<Item data={<YesIcon/>} />, <Item data={<YesIcon/>} />, <Item data={<YesIcon/>} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />,
          ]} />
        <Wrapper title={<Title text='Индикация низкого уровня воды' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Отключение при недостатке воды' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Отсек для хранения насадок	' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Ручка для переноски' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Количество насадок' />}
          data={[<Item data='5' />, <Item data='4' />, <Item data='7' />, <Item data='7' />, <Item data='7' />,
          ]} />

      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">ПАРООЧИСТИТЕЛИ СЕРИИ BDR</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src='https://bort-global.ru/photo/product/93412987'
              href='https://bort-global.ru/klining/paroochistiteli/paroochistitel-bort-bdr-2700-r/'
              model='BDR-2700-R' />,
              <Model src='https://bort-global.ru/photo/product/93410969'
              href='https://bort-global.ru/klining/paroochistiteli/paroochistitel-bort-bdr-2800-rr/'
              model='BDR-2800-RR' />,
              <Model src='https://bort-global.ru/photo/product/93722425'
              href='https://bort-global.ru/klining/paroochistiteli/paroochistitel-bort-bdr-3000-rr/'
              model='BDR-3000-RR' />,
              <Model src='https://bort-global.ru/photo/product/93412963'
              href='https://bort-global.ru/klining/paroochistiteli/paroochistitel-bort-bdr-5000-turbo/'
              model='BDR-5000 Turbo' />]
          } />

        <Wrapper title={<Title text='Вид пароочистителя' />}
          data={[<Item data='Напольный' />, <Item data='Ручной' />, <Item data='Напольный' />, <Item data='Напольный' />,
          ]} />
        <Wrapper title={<Title text='Мощность, Вт' />}
          data={[<Item data='2200' />, <Item data='1300' />, <Item data='1650' />, <Item data='2200' />,
          ]} />
        <Wrapper title={<Title text='Максимальное давление, бар' />}
          data={[<Item data='4' />, <Item data='3,2' />, <Item data='4' />, <Item data='5' />,
          ]} />
        <Wrapper title={<Title text='Постоянная подача пара, г/мин' />}
          data={[<Item data='45' />, <Item data='35' />, <Item data='45' />, <Item data='50' />,
          ]} />
        <Wrapper title={<Title text='Температура пара , °С' />}
          data={[<Item data='143' />, <Item data='133' />, <Item data='143' />, <Item data='150' />,
          ]} />
        <Wrapper title={<Title text='Объем бойлера, л' />}
          data={[<Item data='1,5' />, <Item data='0,45' />, <Item data='1,5' />, <Item data='2' />,
          ]} />
        <Wrapper title={<Title text='Емкость бачка, мл' />}
          data={[<Item data='1500' />, <Item data='350'/>, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />
          ]} />
        <Wrapper title={<Title text='Время нагревания, с' />}
          data={[<Item data='360' />, <Item data='15' />, <Item data='480' />, <Item data='480' />,
          ]} />
        <Wrapper title={<Title text='Время непрерывной работы, мин' />}
          data={[<Item data='35' />, <Item data='13' />, <Item data='45' />, <Item data='40' />,
          ]} />
        <Wrapper title={<Title text='Длина шланга, м' />}
          data={[<Item data='2' />, <Item data='0.55' />, <Item data='1.8' />, <Item data='1.5' />,
          ]} />
        <Wrapper title={<Title text='Длина шнура питания, м' />}
          data={[<Item data='3' />, <Item data='2.7' />, <Item data='5' />, <Item data='4' />,
          ]} />
        <Wrapper title={<Title text='Размер, мм' />}
          data={[<Item data='400 x 285 x 260' />, <Item data='315 x 148 x 225' />, <Item data='300 x 280' />, <Item data='380 x 270 x 250' />,
          ]} />
        <Wrapper title={<Title text='Вес изделия, кг' />}
          data={[<Item data='7.5' />, <Item data='1.8' />, <Item data='3.8' />, <Item data='3.7' />,
          ]} />
        <Wrapper title={<Title text='Использование без химии' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Предохранительный клапан' />}
          data={[<Item data={<YesIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />
          ]} />
        <Wrapper title={<Title text='Индикация низкого уровня воды' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Отключение при недостатке воды' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Отсек для хранения насадок	' />}
          data={[<Item data={<YesIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<NoIcon />} />,
          ]} />
        <Wrapper title={<Title text='Ручка для переноски' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Количество насадок' />}
          data={[<Item data='7' />, <Item data='4' />, <Item data='12' />, <Item data='7' />
          ]} />

      </div>
    </>
  );

}

export default TableSteam;