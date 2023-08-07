import React from 'react';

import Wrapper from './Wrapper';
import Model from './Model';
import Title from './Title';
import Item from './Item';

import { useSortData } from '../hooks/useSortData'

import { dataBHR1600 } from '../data/pressures/dataBHR1600'
import { dataBHR1600Compact } from '../data/pressures/dataBHR1600Compact'
import { dataBHR1700Pro } from '../data/pressures/dataBHR1700Pro'
import { dataBHR2000Pro } from '../data/pressures/dataBHR2000Pro'
import { dataBHR2000MPro } from '../data/pressures/dataBHR2000MPro'

import { dataBHR2000Smart } from '../data/pressures/dataBHR2000Smart'
import { dataBHR2300Pro } from '../data/pressures/dataBHR2300Pro'
import { dataBHR2500RPro } from '../data/pressures/dataBHR2500RPro'
import { dataBHR2700Pro } from '../data/pressures/dataBHR2700Pro'
import { dataBHR2700R } from '../data/pressures/dataBHR2700R'
import { dataKEX2500 } from '../data/pressures/dataKEX2500'
import { dataKEX2700R } from '../data/pressures/dataKEX2700R'
import { dataKEX3000 } from '../data/pressures/dataKEX3000'
import { dataKEX3500 } from '../data/pressures/dataKEX3500'

const TablePressure = () => {

  const sortDataBHR1600 = useSortData(dataBHR1600)
  const sortDataBHR1600Compact = useSortData(dataBHR1600Compact)
  const sortDataBHR1700Pro = useSortData(dataBHR1700Pro)
  const sortDataBHR2000Pro = useSortData(dataBHR2000Pro)
  const sortDataBHR2000MPro = useSortData(dataBHR2000MPro)
  const sortDataBHR2000Smart = useSortData(dataBHR2000Smart)
  const sortDataBHR2300Pro = useSortData(dataBHR2300Pro)
  const sortDataBHR2500RPro = useSortData(dataBHR2500RPro)
  const sortDataBHR2700Pro = useSortData(dataBHR2700Pro)
  const sortDataBHR2700R = useSortData(dataBHR2700R)
  const sortDataKEX2500 = useSortData(dataKEX2500)
  const sortDataKEX2700R = useSortData(dataKEX2700R)
  const sortDataKEX3000 = useSortData(dataKEX3000)
  const sortDataKEX3500 = useSortData(dataKEX3500)

  return (
    <>
      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">МОЙКИ ВЫСОКОГО ДАВЛЕНИЯ СЕРИИ BHR</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src={sortDataBHR1600[0]}
              href={sortDataBHR1600[1]}
              model={sortDataBHR1600[2]} />,
            <Model src={sortDataBHR1600Compact[0]}
              href={sortDataBHR1600Compact[1]}
              model={sortDataBHR1600Compact[2]} />,
            <Model src={sortDataBHR1700Pro[0]}
              href={sortDataBHR1700Pro[1]}
              model={sortDataBHR1700Pro[2]} />,
            <Model src={sortDataBHR2000Pro[0]}
              href={sortDataBHR2000Pro[1]}
              model={sortDataBHR2000Pro[2]} />,
            <Model src={sortDataBHR2000MPro[0]}
              href={sortDataBHR2000MPro[1]}
              model={sortDataBHR2000MPro[2]} />]
          } />

        <Wrapper title={<Title text='Максимальное давление, бар' />}
          data={[<Item data={sortDataBHR1600[3]} />, <Item data={sortDataBHR1600Compact[3]} />, <Item data={sortDataBHR1700Pro[3]} />, <Item data={sortDataBHR2000Pro[3]} />, <Item data={sortDataBHR2000MPro[3]} />]} />

        <Wrapper title={<Title text='Рабочее давление, бар' />}
          data={[<Item data={sortDataBHR1600[4]} />, <Item data={sortDataBHR1600Compact[4]} />, <Item data={sortDataBHR1700Pro[4]} />, <Item data={sortDataBHR2000Pro[4]} />, <Item data={sortDataBHR2000MPro[4]} />]} />

        <Wrapper title={<Title text='Потребляемая мощность, Вт' />}
          data={[<Item data={sortDataBHR1600[5]} />, <Item data={sortDataBHR1600Compact[5]} />, <Item data={sortDataBHR1700Pro[5]} />, <Item data={sortDataBHR2000Pro[5]} />, <Item data={sortDataBHR2000MPro[5]} />]} />

        <Wrapper title={<Title text='Максимальная производительность, л/час' />}
          data={[<Item data={sortDataBHR1600[6]} />, <Item data={sortDataBHR1600Compact[6]} />, <Item data={sortDataBHR1700Pro[6]} />, <Item data={sortDataBHR2000Pro[6]} />, <Item data={sortDataBHR2000MPro[6]} />]} />

        <Wrapper title={<Title text='Шланг,м' />}
          data={[<Item data={sortDataBHR1600[7]} />, <Item data={sortDataBHR1600Compact[7]} />, <Item data={sortDataBHR1700Pro[7]} />, <Item data={sortDataBHR2000Pro[7]} />, <Item data={sortDataBHR2000MPro[7]} />]} />

        <Wrapper title={<Title text='Длина шнура питания, м' />}
          data={[<Item data={sortDataBHR1600[8]} />, <Item data={sortDataBHR1600Compact[8]} />, <Item data={sortDataBHR1700Pro[8]} />, <Item data={sortDataBHR2000Pro[8]} />, <Item data={sortDataBHR2000MPro[8]} />]} />

        <Wrapper title={<Title text='Вес, кг' />}
          data={[<Item data={sortDataBHR1600[9]} />, <Item data={sortDataBHR1600Compact[9]} />, <Item data={sortDataBHR1700Pro[9]} />, <Item data={sortDataBHR2000Pro[9]} />, <Item data={sortDataBHR2000MPro[9]} />]} />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data={sortDataBHR1600[10]} />, <Item data={sortDataBHR1600Compact[10]} classHidden='comparison-data__item_hidden' />,
          <Item data={sortDataBHR1700Pro[10]} classHidden='comparison-data__item_hidden' />, <Item data={sortDataBHR2000Pro[10]} classHidden='comparison-data__item_hidden' />,
          <Item data={sortDataBHR2000MPro[10]} classHidden='comparison-data__item_hidden' />]} />

        <Wrapper title={<Title text='Система охлаждения' />}
          data={[<Item data={sortDataBHR1600[11]} />, <Item data={sortDataBHR1600Compact[11]} classHidden='comparison-data__item_hidden' />,
          <Item data={sortDataBHR1700Pro[11]} classHidden='comparison-data__item_hidden' />,
          <Item data={sortDataBHR2000Pro[11]} classHidden='comparison-data__item_hidden' />,
          <Item data={sortDataBHR2000MPro[11]} classHidden='comparison-data__item_hidden' />]} />

        <Wrapper title={<Title text='Автоматическое всасывание' />}
          data={[<Item data={sortDataBHR1600[12]} />, <Item data={sortDataBHR1600Compact[12]} />, <Item data={sortDataBHR1700Pro[12]} />, <Item data={sortDataBHR2000Pro[12]} />,
          <Item data={sortDataBHR2000MPro[12]} />]} />

        <Wrapper title={<Title text='Защита от перегрева' />}
          data={[<Item data={sortDataBHR1600[13]} />, <Item data={sortDataBHR1600Compact[13]} />, <Item data={sortDataBHR1700Pro[13]} />, <Item data={sortDataBHR2000Pro[13]} />,
          <Item data={sortDataBHR2000MPro[13]} />]} />

      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">МОЙКИ ВЫСОКОГО ДАВЛЕНИЯ СЕРИИ BHR</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [
              <Model src={sortDataBHR2000Smart[0]}
                href={sortDataBHR2000Smart[1]}
                model={sortDataBHR2000Smart[2]} />,
              <Model src={sortDataBHR2300Pro[0]}
                href={sortDataBHR2300Pro[1]}
                model={sortDataBHR2300Pro[2]} />,
              <Model src={sortDataBHR2500RPro[0]}
                href={sortDataBHR2500RPro[1]}
                model={sortDataBHR2500RPro[2]} />,
              <Model src={sortDataBHR2700Pro[0]}
                href={sortDataBHR2700Pro[1]}
                model={sortDataBHR2700Pro[2]} />,
              <Model src={sortDataBHR2700R[0]}
                href={sortDataBHR2700R[1]}
                model={sortDataBHR2700R[2]} />]
          } />

        <Wrapper title={<Title text='Максимальное давление, бар' />}
          data={[<Item data={sortDataBHR2000Smart[3]} />, <Item data={sortDataBHR2300Pro[3]} />, <Item data={sortDataBHR2500RPro[3]} />, <Item data={sortDataBHR2700Pro[3]} />, <Item data={sortDataBHR2700R[3]} />]} />

        <Wrapper title={<Title text='Рабочее давление, бар' />}
          data={[<Item data={sortDataBHR2000Smart[4]} />, <Item data={sortDataBHR2300Pro[4]} />, <Item data={sortDataBHR2500RPro[4]} />, <Item data={sortDataBHR2700Pro[4]} />, <Item data={sortDataBHR2700R[4]} />]} />

        <Wrapper title={<Title text='Потребляемая мощность, Вт' />}
          data={[<Item data={sortDataBHR2000Smart[5]} />, <Item data={sortDataBHR2300Pro[5]} />, <Item data={sortDataBHR2500RPro[5]} />, <Item data={sortDataBHR2700Pro[5]} />, <Item data={sortDataBHR2700R[5]} />]} />

        <Wrapper title={<Title text='Максимальная производительность, л/час' />}
          data={[<Item data={sortDataBHR2000Smart[6]} />, <Item data={sortDataBHR2300Pro[6]} />, <Item data={sortDataBHR2500RPro[6]} />, <Item data={sortDataBHR2700Pro[6]} />, <Item data={sortDataBHR2700R[6]} />]} />

        <Wrapper title={<Title text='Шланг,м' />}
          data={[<Item data={sortDataBHR2000Smart[7]} />, <Item data={sortDataBHR2300Pro[7]} />, <Item data={sortDataBHR2500RPro[7]} />, <Item data={sortDataBHR2700Pro[7]} />, <Item data={sortDataBHR2700R[7]} />]} />

        <Wrapper title={<Title text='Длина шнура питания, м' />}
          data={[<Item data={sortDataBHR2000Smart[8]} />, <Item data={sortDataBHR2300Pro[8]} />, <Item data={sortDataBHR2500RPro[8]} />, <Item data={sortDataBHR2700Pro[8]} />, <Item data={sortDataBHR2700R[8]} />]} />

        <Wrapper title={<Title text='Вес, кг' />}
          data={[<Item data={sortDataBHR2000Smart[9]} />, <Item data={sortDataBHR2300Pro[9]} />, <Item data={sortDataBHR2500RPro[9]} />, <Item data={sortDataBHR2700Pro[9]} />, <Item data={sortDataBHR2700R[9]} />]} />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data={sortDataBHR2000Smart[10]} />, <Item data={sortDataBHR2300Pro[10]} classHidden='comparison-data__item_hidden' />,
            <Item data={sortDataBHR2500RPro[10]} classHidden='comparison-data__item_hidden' />,
            <Item data={sortDataBHR2700Pro[10]} classHidden='comparison-data__item_hidden' />,
            <Item data={sortDataBHR2700R[10]} classHidden='comparison-data__item_hidden' />]} />

        <Wrapper title={<Title text='Система охлаждения' />}
          data={[<Item data={sortDataBHR2000Smart[11]} />, <Item data={sortDataBHR2300Pro[11]} classHidden='comparison-data__item_hidden' />,
            <Item data={sortDataBHR2500RPro[11]} classHidden='comparison-data__item_hidden' />,
            <Item data={sortDataBHR2700Pro[11]} classHidden='comparison-data__item_hidden' />,
            <Item data={sortDataBHR2700R[11]} classHidden='comparison-data__item_hidden' />]} />

        <Wrapper title={<Title text='Автоматическое всасывание' />}
          data={[<Item data={sortDataBHR2000Smart[12]} />, <Item data={sortDataBHR2300Pro[12]} />, <Item data={sortDataBHR2500RPro[12]} />,
            <Item data={sortDataBHR2700Pro[12]} />, <Item data={sortDataBHR2700R[12]} />]} />

        <Wrapper title={<Title text='Защита от перегрева' />}
          data={[<Item data={sortDataBHR2000Smart[13]} />, <Item data={sortDataBHR2300Pro[13]} />, <Item data={sortDataBHR2500RPro[13]} />,
            <Item data={sortDataBHR2700Pro[13]} />, <Item data={sortDataBHR2700R[12]} />]} />

      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">МОЙКИ ВЫСОКОГО ДАВЛЕНИЯ СЕРИИ KEX</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src={sortDataKEX2500[0]}
              href={sortDataKEX2500[1]}
              model={sortDataKEX2500[2]} />,
              <Model src={sortDataKEX2700R[0]}
                href={sortDataKEX2700R[1]}
                model={sortDataKEX2700R[2]} />,
              <Model src={sortDataKEX3000[0]}
                href={sortDataKEX3000[1]}
                model={sortDataKEX3000[2]} />,
              <Model src={sortDataKEX3500[0]}
                href={sortDataKEX3500[1]}
                model={sortDataKEX3500[2]} />]
          } />

        <Wrapper title={<Title text='Максимальное давление, бар' />}
          data={[<Item data={sortDataKEX2500[3]} />, <Item data={sortDataKEX2700R[3]} />, <Item data={sortDataKEX3000[3]} />, <Item data={sortDataKEX3500[3]} />]} />

        <Wrapper title={<Title text='Рабочее давление, бар' />}
          data={[<Item data={sortDataKEX2500[4]} />, <Item data={sortDataKEX2700R[4]} />, <Item data={sortDataKEX3000[4]} />, <Item data={sortDataKEX3500[4]} />]} />

        <Wrapper title={<Title text='Потребляемая мощность, Вт' />}
          data={[<Item data={sortDataKEX2500[5]} />, <Item data={sortDataKEX2700R[5]} />, <Item data={sortDataKEX3000[5]} />, <Item data={sortDataKEX3500[5]} />]} />

        <Wrapper title={<Title text='Максимальная производительность, л/час' />}
          data={[<Item data={sortDataKEX2500[6]} />, <Item data={sortDataKEX2700R[6]} />, <Item data={sortDataKEX3000[6]} />, <Item data={sortDataKEX3500[6]} />]} />

        <Wrapper title={<Title text='Шланг,м' />}
          data={[<Item data={sortDataKEX2500[7]} />, <Item data={sortDataKEX2700R[7]} />, <Item data={sortDataKEX3000[7]} />, <Item data={sortDataKEX3500[7]} />]} />

        <Wrapper title={<Title text='Длина шнура питания, м' />}
          data={[<Item data={sortDataKEX2500[8]} />, <Item data={sortDataKEX2700R[8]} />, <Item data={sortDataKEX3000[8]} />, <Item data={sortDataKEX3500[8]} />]} />

        <Wrapper title={<Title text='Вес, кг' />}
          data={[<Item data={sortDataKEX2500[9]} />, <Item data={sortDataKEX2700R[9]} />, <Item data={sortDataKEX3000[9]} />, <Item data={sortDataKEX3500[9]} />]} />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data={sortDataKEX2500[10]} />, <Item data={sortDataKEX2700R[10]} classHidden='comparison-data__item_hidden'
          />, <Item data={sortDataKEX3000[10]} classHidden='comparison-data__item_hidden' />,
            <Item data={sortDataKEX3500[10]} classHidden='comparison-data__item_hidden' />]} />

        <Wrapper title={<Title text='Система охлаждения' />}
          data={[<Item data={sortDataKEX2500[11]} />, <Item data={sortDataKEX2700R[11]} />, <Item data={sortDataKEX3000[11]} />, <Item data={sortDataKEX3500[11]} />]} />

        <Wrapper title={<Title text='Автоматическое всасывание' />}
          data={[<Item data={sortDataKEX2500[12]} />, <Item data={sortDataKEX2700R[12]} />, <Item data={sortDataKEX3000[12]} />, <Item data={sortDataKEX3500[12]} />]} />
        <Wrapper title={<Title text='Защита от перегрева' />}
          data={[<Item data={sortDataKEX2500[13]} />, <Item data={sortDataKEX2700R[13]} />, <Item data={sortDataKEX3000[13]} />, <Item data={sortDataKEX3500[13]} />]} />

      </div>
    </>
  );

}

export default TablePressure;