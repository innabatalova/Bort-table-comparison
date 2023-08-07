import React from 'react';

import Wrapper from './Wrapper';
import Model from './Model';
import Title from './Title';
import Item from './Item';
import NoIcon from './NoIcon';
import YesIcon from './YesIcon';

import { useSortData } from '../hooks/useSortData'

import { dataBDR1200 } from '../data/steams/dataBDR1200'
import { dataBDR1500RR } from '../data/steams/dataBDR1500RR'
import { dataBDR2300R } from '../data/steams/dataBDR2300R'
import { dataBDR2500RR } from '../data/steams/dataBDR2500RR'
import { dataBDR2500RRIron } from '../data/steams/dataBDR2500RRIron'
import { dataBDR2700R } from '../data/steams/dataBDR2700R'
import { dataBDR2800RR } from '../data/steams/dataBDR2800RR'
import { dataBDR3000RR } from '../data/steams/dataBDR3000RR'
import { dataBDR5000Turbo } from '../data/steams/dataBDR5000Turbo'

const TableSteam = () => {

  const sortDataBDR1200 = useSortData(dataBDR1200)
  const sortDataBDR1500RR = useSortData(dataBDR1500RR)
  const sortDataBDR2300R = useSortData(dataBDR2300R)
  const sortDataBDR2500RR = useSortData(dataBDR2500RR)
  const sortDataBDR2500RRIron = useSortData(dataBDR2500RRIron)

  const sortDataBDR2700R = useSortData(dataBDR2700R)
  const sortDataBDR2800RR = useSortData(dataBDR2800RR)
  const sortDataBDR3000RR = useSortData(dataBDR3000RR)
  const sortDataBDR5000Turbo = useSortData(dataBDR5000Turbo)

  return (
    <>
      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">ПАРООЧИСТИТЕЛИ СЕРИИ BDR</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src={sortDataBDR1200[0]}
              href={sortDataBDR1200[1]}
              model={sortDataBDR1200[2]} />,
              <Model src={sortDataBDR1500RR[0]}
                href={sortDataBDR1500RR[1]}
                model={sortDataBDR1500RR[2]} />,
              <Model src={sortDataBDR2300R[0]}
                href={sortDataBDR2300R[1]}
                model={sortDataBDR2300R[2]} />,
              <Model src={sortDataBDR2500RR[0]}
                href={sortDataBDR2500RR[1]}
                model={sortDataBDR2500RR[2]} />,
              <Model src={sortDataBDR2500RRIron[0]}
                href={sortDataBDR2500RRIron[1]}
                model={sortDataBDR2500RRIron[2]} />]
          } />

        <Wrapper title={<Title text='Вид пароочистителя' />}
          data={[<Item data={sortDataBDR1200[3]} />, <Item data={sortDataBDR1500RR[3]} />, <Item data={sortDataBDR2300R[3]} />, <Item data={sortDataBDR2500RR[3]} />, <Item data={sortDataBDR2500RRIron[3]} />,
          ]} />
        <Wrapper title={<Title text='Мощность, Вт' />}
          data={[<Item data={sortDataBDR1200[4]} />, <Item data={sortDataBDR1500RR[4]} />, <Item data={sortDataBDR2300R[4]} />, <Item data={sortDataBDR2500RR[4]} />, <Item data={sortDataBDR2500RRIron[4]} />,
          ]} />
        <Wrapper title={<Title text='Максимальное давление, бар' />}
          data={[<Item data={sortDataBDR1200[5]} />, <Item data={sortDataBDR1500RR[5]} />, <Item data={sortDataBDR2300R[5]} />, <Item data={sortDataBDR2500RR[5]} />, <Item data={sortDataBDR2500RRIron[5]} />,
          ]} />
        <Wrapper title={<Title text='Постоянная подача пара, г/мин' />}
          data={[<Item data={sortDataBDR1200[6]} />, <Item data={sortDataBDR1500RR[6]} />, <Item data={sortDataBDR2300R[6]} />, <Item data={sortDataBDR2500RR[6]} />, <Item data={sortDataBDR2500RRIron[6]} />,
          ]} />
        <Wrapper title={<Title text='Температура пара , °С' />}
          data={[<Item data={sortDataBDR1200[7]} />, <Item data={sortDataBDR1500RR[7]} />, <Item data={sortDataBDR2300R[7]} />, <Item data={sortDataBDR2500RR[7]} />, <Item data={sortDataBDR2500RRIron[7]} />,
          ]} />
        <Wrapper title={<Title text='Объем бойлера, л' />}
          data={[<Item data={sortDataBDR1200[8]} />, <Item data={sortDataBDR1500RR[8]} />, <Item data={sortDataBDR2300R[8]} />, <Item data={sortDataBDR2500RR[8]} />, <Item data={sortDataBDR2500RRIron[8]} />,
          ]} />
        <Wrapper title={<Title text='Емкость бачка, мл' />}
          data={[<Item data={sortDataBDR1200[9]} />, <Item data={sortDataBDR1500RR[9]} />, <Item data={sortDataBDR2300R[9]} />, <Item data={sortDataBDR2500RR[9]} />, <Item data={sortDataBDR2500RRIron[9]} />,
          ]} />
        <Wrapper title={<Title text='Время нагревания, с' />}
          data={[<Item data={sortDataBDR1200[10]} />, <Item data={sortDataBDR1500RR[10]} />, <Item data={sortDataBDR2300R[10]} />, <Item data={sortDataBDR2500RR[10]} />, <Item data={sortDataBDR2500RRIron[10]} />,
          ]} />
        <Wrapper title={<Title text='Время непрерывной работы, мин' />}
          data={[<Item data={sortDataBDR1200[11]} />, <Item data={sortDataBDR1500RR[11]} />, <Item data={sortDataBDR2300R[11]} />, <Item data={sortDataBDR2500RR[11]} />, <Item data={sortDataBDR2500RRIron[11]} />,
          ]} />
        <Wrapper title={<Title text='Длина шланга, м' />}
          data={[<Item data={sortDataBDR1200[12]} />, <Item data={sortDataBDR1500RR[12]} />, <Item data={sortDataBDR2300R[12]} />, <Item data={sortDataBDR2500RR[12]} />, <Item data={sortDataBDR2500RRIron[12]} />,
          ]} />
        <Wrapper title={<Title text='Длина шнура питания, м' />}
          data={[<Item data={sortDataBDR1200[13]} />, <Item data={sortDataBDR1500RR[13]} />, <Item data={sortDataBDR2300R[13]} />, <Item data={sortDataBDR2500RR[13]} />, <Item data={sortDataBDR2500RRIron[13]} />,
          ]} />
        <Wrapper title={<Title text='Размер, мм' />}
          data={[<Item data={sortDataBDR1200[14]} />, <Item data={sortDataBDR1500RR[14]} />, <Item data={sortDataBDR2300R[14]} />, <Item data={sortDataBDR2500RR[14]} />, <Item data={sortDataBDR2500RRIron[14]} />,
          ]} />
        <Wrapper title={<Title text='Вес изделия, кг' />}
          data={[<Item data={sortDataBDR1200[15]} />, <Item data={sortDataBDR1500RR[15]} />, <Item data={sortDataBDR2300R[15]} />, <Item data={sortDataBDR2500RR[15]} />, <Item data={sortDataBDR2500RRIron[15]} />,
          ]} />
        <Wrapper title={<Title text='Использование без химии' />}
          data={[<Item data={sortDataBDR1200[16]} />, <Item data={sortDataBDR1500RR[16]} />, <Item data={sortDataBDR2300R[16]} />, <Item data={sortDataBDR2500RR[16]} />, <Item data={sortDataBDR2500RRIron[16]} />,
          ]} />
        <Wrapper title={<Title text='Предохранительный клапан' />}
          data={[<Item data={sortDataBDR1200[17]} />, <Item data={sortDataBDR1500RR[17]} />, <Item data={sortDataBDR2300R[17]} />, <Item data={sortDataBDR2500RR[17]} />, <Item data={sortDataBDR2500RRIron[17]} />,
          ]} />
        <Wrapper title={<Title text='Индикация низкого уровня воды' />}
          data={[<Item data={sortDataBDR1200[18]} />, <Item data={sortDataBDR1500RR[18]} />, <Item data={sortDataBDR2300R[18]} />, <Item data={sortDataBDR2500RR[18]} />, <Item data={sortDataBDR2500RRIron[18]} />,
          ]} />
        <Wrapper title={<Title text='Отключение при недостатке воды' />}
          data={[<Item data={sortDataBDR1200[19]} />, <Item data={sortDataBDR1500RR[19]} />, <Item data={sortDataBDR2300R[19]} />, <Item data={sortDataBDR2500RR[19]} />, <Item data={sortDataBDR2500RRIron[19]} />,
          ]} />
        <Wrapper title={<Title text='Отсек для хранения насадок' />}
          data={[<Item data={sortDataBDR1200[20]} />, <Item data={sortDataBDR1500RR[20]} />, <Item data={sortDataBDR2300R[20]} />, <Item data={sortDataBDR2500RR[20]} />, <Item data={sortDataBDR2500RRIron[20]} />,
          ]} />
        <Wrapper title={<Title text='Ручка для переноски' />}
          data={[<Item data={sortDataBDR1200[21]} />, <Item data={sortDataBDR1500RR[21]} />, <Item data={sortDataBDR2300R[21]} />, <Item data={sortDataBDR2500RR[21]} />, <Item data={sortDataBDR2500RRIron[21]} />,
          ]} />
        <Wrapper title={<Title text='Количество насадок' />}
          data={[<Item data={sortDataBDR1200[22]} />, <Item data={sortDataBDR1500RR[22]} />, <Item data={sortDataBDR2300R[22]} />, <Item data={sortDataBDR2500RR[22]} />, <Item data={sortDataBDR2500RRIron[22]} />,
          ]} />

      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">ПАРООЧИСТИТЕЛИ СЕРИИ BDR</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src={sortDataBDR2700R[0]}
              href={sortDataBDR2700R[1]}
              model={sortDataBDR2700R[2]} />,
              <Model src={sortDataBDR2800RR[0]}
                href={sortDataBDR2800RR[1]}
                model={sortDataBDR2800RR[2]} />,
              <Model src={sortDataBDR3000RR[0]}
                href={sortDataBDR3000RR[1]}
                model={sortDataBDR3000RR[2]} />,
              <Model src={sortDataBDR5000Turbo[0]}
                href={sortDataBDR5000Turbo[1]}
                model={sortDataBDR5000Turbo[2]} />]
          } />

        <Wrapper title={<Title text='Вид пароочистителя' />}
          data={[<Item data={sortDataBDR2700R[3]} />, <Item data={sortDataBDR2800RR[3]} />, <Item data={sortDataBDR3000RR[3]} />, <Item data={sortDataBDR5000Turbo[3]} />,
          ]} />
        <Wrapper title={<Title text='Мощность, Вт' />}
          data={[<Item data={sortDataBDR2700R[4]} />, <Item data={sortDataBDR2800RR[4]} />, <Item data={sortDataBDR3000RR[4]} />, <Item data={sortDataBDR5000Turbo[4]} />,
          ]} />
        <Wrapper title={<Title text='Максимальное давление, бар' />}
          data={[<Item data={sortDataBDR2700R[5]} />, <Item data={sortDataBDR2800RR[5]} />, <Item data={sortDataBDR3000RR[5]} />, <Item data={sortDataBDR5000Turbo[5]} />,
          ]} />
        <Wrapper title={<Title text='Постоянная подача пара, г/мин' />}
          data={[<Item data={sortDataBDR2700R[6]} />, <Item data={sortDataBDR2800RR[6]} />, <Item data={sortDataBDR3000RR[6]} />, <Item data={sortDataBDR5000Turbo[6]} />,
          ]} />
        <Wrapper title={<Title text='Температура пара , °С' />}
          data={[<Item data={sortDataBDR2700R[7]} />, <Item data={sortDataBDR2800RR[7]} />, <Item data={sortDataBDR3000RR[7]} />, <Item data={sortDataBDR5000Turbo[7]} />,
          ]} />
        <Wrapper title={<Title text='Объем бойлера, л' />}
          data={[<Item data={sortDataBDR2700R[8]} />, <Item data={sortDataBDR2800RR[8]} />, <Item data={sortDataBDR3000RR[8]} />, <Item data={sortDataBDR5000Turbo[8]} />,
          ]} />
        <Wrapper title={<Title text='Емкость бачка, мл' />}
          data={[<Item data={sortDataBDR2700R[9]} />, <Item data={sortDataBDR2800RR[9]} />, <Item data={sortDataBDR3000RR[9]} />, <Item data={sortDataBDR5000Turbo[9]} />
          ]} />
        <Wrapper title={<Title text='Время нагревания, с' />}
          data={[<Item data={sortDataBDR2700R[10]} />, <Item data={sortDataBDR2800RR[10]} />, <Item data={sortDataBDR3000RR[10]} />, <Item data={sortDataBDR5000Turbo[10]} />,
          ]} />
        <Wrapper title={<Title text='Время непрерывной работы, мин' />}
          data={[<Item data={sortDataBDR2700R[11]} />, <Item data={sortDataBDR2800RR[11]} />, <Item data={sortDataBDR3000RR[11]} />, <Item data={sortDataBDR5000Turbo[11]} />,
          ]} />
        <Wrapper title={<Title text='Длина шланга, м' />}
          data={[<Item data={sortDataBDR2700R[12]} />, <Item data={sortDataBDR2800RR[12]} />, <Item data={sortDataBDR3000RR[12]} />, <Item data={sortDataBDR5000Turbo[12]} />,
          ]} />
        <Wrapper title={<Title text='Длина шнура питания, м' />}
          data={[<Item data={sortDataBDR2700R[13]} />, <Item data={sortDataBDR2800RR[13]} />, <Item data={sortDataBDR3000RR[13]} />, <Item data={sortDataBDR5000Turbo[13]} />,
          ]} />
        <Wrapper title={<Title text='Размер, мм' />}
          data={[<Item data={sortDataBDR2700R[14]} />, <Item data={sortDataBDR2800RR[14]} />, <Item data={sortDataBDR3000RR[14]} />, <Item data={sortDataBDR5000Turbo[14]} />,
          ]} />
        <Wrapper title={<Title text='Вес изделия, кг' />}
          data={[<Item data={sortDataBDR2700R[15]} />, <Item data={sortDataBDR2800RR[15]} />, <Item data={sortDataBDR3000RR[15]} />, <Item data={sortDataBDR5000Turbo[15]} />,
          ]} />
        <Wrapper title={<Title text='Использование без химии' />}
          data={[<Item data={sortDataBDR2700R[16]} />, <Item data={sortDataBDR2800RR[16]} />, <Item data={sortDataBDR3000RR[16]} />, <Item data={sortDataBDR5000Turbo[16]} />,
          ]} />
        <Wrapper title={<Title text='Предохранительный клапан' />}
          data={[<Item data={sortDataBDR2700R[17]} />, <Item data={sortDataBDR2800RR[17]} />, <Item data={sortDataBDR3000RR[17]} />, <Item data={sortDataBDR5000Turbo[17]} />
          ]} />
        <Wrapper title={<Title text='Индикация низкого уровня воды' />}
          data={[<Item data={sortDataBDR2700R[18]} />, <Item data={sortDataBDR2800RR[18]} />, <Item data={sortDataBDR3000RR[18]} />, <Item data={sortDataBDR5000Turbo[18]} />,
          ]} />
        <Wrapper title={<Title text='Отключение при недостатке воды' />}
          data={[<Item data={sortDataBDR2700R[19]} />, <Item data={sortDataBDR2800RR[19]} />, <Item data={sortDataBDR3000RR[19]} />, <Item data={sortDataBDR5000Turbo[19]} />,
          ]} />
        <Wrapper title={<Title text='Отсек для хранения насадок	' />}
          data={[<Item data={sortDataBDR2700R[20]} />, <Item data={sortDataBDR2800RR[20]} />, <Item data={sortDataBDR3000RR[20]} />, <Item data={sortDataBDR5000Turbo[20]} />,
          ]} />
        <Wrapper title={<Title text='Ручка для переноски' />}
          data={[<Item data={sortDataBDR2700R[21]} />, <Item data={sortDataBDR2800RR[21]} />, <Item data={sortDataBDR3000RR[21]} />, <Item data={sortDataBDR5000Turbo[21]} />,
          ]} />
        <Wrapper title={<Title text='Количество насадок' />}
          data={[<Item data={sortDataBDR2700R[22]} />, <Item data={sortDataBDR2800RR[22]} />, <Item data={sortDataBDR3000RR[22]} />, <Item data={sortDataBDR5000Turbo[22]} />
          ]} />

      </div>
    </>
  );

}

export default TableSteam;