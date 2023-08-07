import React from 'react';

import Wrapper from './Wrapper';
import Model from './Model';
import Title from './Title';
import Item from './Item';

import { useSortData } from '../hooks/useSortData'

import { dataAlligator } from '../data/disposers/dataAlligator'
import { dataAlligatorPlus } from '../data/disposers/dataAlligatorPlus'
import { dataAlligatorMax } from '../data/disposers/dataAlligatorMax'
import { dataAlligatorMega } from '../data/disposers/dataAlligatorMega'
import { dataAlligatorX } from '../data/disposers/dataAlligatorX'

import { dataMasterEco } from '../data/disposers/dataMasterEco'
import { dataTitan4000 } from '../data/disposers/dataTitan4000'
import { dataTitan4000Plus } from '../data/disposers/dataTitan4000Plus'
import { dataTitan4000Control } from '../data/disposers/dataTitan4000Control'

import { dataTitan5000 } from '../data/disposers/dataTitan5000'
import { dataTitan5000Control } from '../data/disposers/dataTitan5000Control'
import { dataTitan9000 } from '../data/disposers/dataTitan9000'
import { dataTitanExtra } from '../data/disposers/dataTitanExtra'

import { dataTitanMaxPower } from '../data/disposers/dataTitanMaxPower'
import { dataTitanMaxFullControl } from '../data/disposers/dataTitanMaxFullControl'
import { dataTitan7000 } from '../data/disposers/dataTitan7000'

const TableDisposer = () => {

  const sortDataAlligator = useSortData(dataAlligator)
  const sortDataAlligatorPlus = useSortData(dataAlligatorPlus)
  const sortDataAlligatorMax = useSortData(dataAlligatorMax)
  const sortDataAlligatorMega = useSortData(dataAlligatorMega)
  const sortDataAlligatorX = useSortData(dataAlligatorX)
  const sortDataMasterEco = useSortData(dataMasterEco)
  const sortDataTitan4000 = useSortData(dataTitan4000)
  const sortDataTitan4000Plus = useSortData(dataTitan4000Plus)
  const sortDataTitan4000Control = useSortData(dataTitan4000Control)
  const sortDataTitan5000 = useSortData(dataTitan5000)
  const sortDataTitan5000Control = useSortData(dataTitan5000Control)
  const sortDataTitan9000 = useSortData(dataTitan9000)
  const sortDataTitanExtra = useSortData(dataTitanExtra)
  const sortDataTitanMaxPower = useSortData(dataTitanMaxPower)
  const sortDataTitanMaxFullControl = useSortData(dataTitanMaxFullControl)
  const sortDataTitan7000 = useSortData(dataTitan7000)

  return (
    <>
      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">СРАВНИТЕЛЬНАЯ ТАБЛИЦА ИЗМЕЛЬЧИТЕЛЕЙ ПИЩЕВЫХ ОТХОДОВ BORT СЕРИИ ALLIGATOR</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src={sortDataAlligator[0]}
              href={sortDataAlligator[1]}
              model={sortDataAlligator[2]} />,
            <Model src={sortDataAlligatorPlus[0]}
              href={sortDataAlligatorPlus[1]}
              model={sortDataAlligatorPlus[2]} />,
            <Model src={sortDataAlligatorMax[0]}
              href={sortDataAlligatorMax[1]}
              model={sortDataAlligatorMax[2]} />,
            <Model src={sortDataAlligatorMega[0]}
              href={sortDataAlligatorMega[1]}
              model={sortDataAlligatorMega[2]} />,
            <Model src={sortDataAlligatorX[0]}
              href={sortDataAlligatorX[1]}
              model={sortDataAlligatorX[2]} />
            ]
          } />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Высокопроизводительный индукционный мотор' />
          ]} />
        <Wrapper title={<Title text='Мощность, Вт/лс' />}
          data={[<Item data={sortDataAlligator[3]} />, <Item data={sortDataAlligatorPlus[3]} />, <Item data={sortDataAlligatorMax[3]} />, <Item data={sortDataAlligatorMega[3]} />, <Item data={sortDataAlligatorX[3]} />
          ]} />
        <Wrapper title={<Title text='Производительность, кг/мин' />}
          data={[<Item data={sortDataAlligator[4]} />, <Item data={sortDataAlligatorPlus[4]} />, <Item data={sortDataAlligatorMax[4]} />, <Item data={sortDataAlligatorMega[4]} />, <Item data={sortDataAlligatorX[4]} />
          ]} />
        <Wrapper title={<Title text='Объем камеры измельчения, см3' />}
          data={[<Item data={sortDataAlligator[5]} />, <Item data={sortDataAlligatorPlus[5]} />, <Item data={sortDataAlligatorMax[5]} />, <Item data={sortDataAlligatorMega[5]} />, <Item data={sortDataAlligatorX[5]} />
          ]} />
        <Wrapper title={<Title text='Число ступеней измельчения' />}
          data={[<Item data={sortDataAlligator[6]} />, <Item data={sortDataAlligatorPlus[6]} />, <Item data={sortDataAlligatorMax[6]} />, <Item data={sortDataAlligatorMega[6]} />, <Item data={sortDataAlligatorX[6]} />
          ]} />
        <Wrapper title={<Title text='Система шумоизоляции' />}
          data={[<Item data={sortDataAlligator[7]} />, <Item data={sortDataAlligatorPlus[7]} />, <Item data={sortDataAlligatorMax[7]} />, <Item data={sortDataAlligatorMega[7]} />, <Item data={sortDataAlligatorX[7]} />
          ]} />
        <Wrapper title={<Title text='Уровень шума, dB' />}
          data={[<Item data={sortDataAlligator[8]} />, <Item data={sortDataAlligatorPlus[8]} />, <Item data={sortDataAlligatorMax[8]} />, <Item data={sortDataAlligatorMega[8]} />, <Item data={sortDataAlligatorX[8]} />
          ]} />
        <Wrapper title={<Title text='Защита от перегрузки, заклинивания, влагозащищенность' />}
          data={[<Item data={sortDataAlligator[9]} />, <Item data={sortDataAlligatorPlus[9]} />, <Item data={sortDataAlligatorMax[9]} />, <Item data={sortDataAlligatorMega[9]} />, <Item data={sortDataAlligatorX[9]} />
          ]} />
        <Wrapper title={<Title text='Возможность Reset' />}
          data={[<Item data={sortDataAlligator[10]} />, <Item data={sortDataAlligatorPlus[10]} />, <Item data={sortDataAlligatorMax[10]} />, <Item data={sortDataAlligatorMega[10]} />, <Item data={sortDataAlligatorX[10]} />
          ]} />
        <Wrapper title={<Title text='Тихий запуск' />}
          data={[<Item data={sortDataAlligator[11]} />, <Item data={sortDataAlligatorPlus[11]} />, <Item data={sortDataAlligatorMax[11]} />, <Item data={sortDataAlligatorMega[11]} />, <Item data={sortDataAlligatorX[11]} />
          ]} />
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={sortDataAlligator[12]} />, <Item data={sortDataAlligatorPlus[12]} />, <Item data={sortDataAlligatorMax[12]} />, <Item data={sortDataAlligatorMega[12]} />, <Item data={sortDataAlligatorX[12]} />
          ]} />
        <Wrapper title={<Title text='Автоматический реверс при заклинивании' />}
          data={[<Item data={sortDataAlligator[13]} />, <Item data={sortDataAlligatorPlus[13]} />, <Item data={sortDataAlligatorMax[13]} />, <Item data={sortDataAlligatorMega[13]} />, <Item data={sortDataAlligatorX[13]} />
          ]} />
        <Wrapper title={<Title text='Автоматическое отключение' />}
          data={[<Item data={sortDataAlligator[14]} />, <Item data={sortDataAlligatorPlus[14]} />, <Item data={sortDataAlligatorMax[14]} />, <Item data={sortDataAlligatorMega[14]} />, <Item data={sortDataAlligatorX[14]} />
          ]} />
        <Wrapper title={<Title text='Управление пневмокнопкой' />}
          data={[<Item data={sortDataAlligator[15]} />, <Item data={sortDataAlligatorPlus[15]} />, <Item data={sortDataAlligatorMax[15]} />, <Item data={sortDataAlligatorMega[15]} />, <Item data={sortDataAlligatorX[15]} />
          ]} />
        <Wrapper title={<Title text='Управление беспроводной кнопкой' />}
          data={[<Item data={sortDataAlligator[16]} />, <Item data={sortDataAlligatorPlus[16]} />, <Item data={sortDataAlligatorMax[16]} />, <Item data={sortDataAlligatorMega[16]} />, <Item data={sortDataAlligatorX[16]} />
          ]} />
        <Wrapper title={<Title text='Автоподача воды' />}
          data={[<Item data={sortDataAlligator[17]} />, <Item data={sortDataAlligatorPlus[17]} />, <Item data={sortDataAlligatorMax[17]} />, <Item data={sortDataAlligatorMega[17]} />, <Item data={sortDataAlligatorX[17]} />
          ]} />
        <Wrapper title={<Title text='Вес изделия с навесным оборудованием, кг' />}
          data={[<Item data={sortDataAlligator[18]} />, <Item data={sortDataAlligatorPlus[18]} />, <Item data={sortDataAlligatorMax[18]} />, <Item data={sortDataAlligatorMega[18]} />, <Item data={sortDataAlligatorX[18]} />
          ]} />
        <Wrapper title={<Title text='Рассчитан на количество, чел' />}
          data={[<Item data={sortDataAlligator[19]} />, <Item data={sortDataAlligatorPlus[19]} />, <Item data={sortDataAlligatorMax[19]} />, <Item data={sortDataAlligatorMega[19]} />, <Item data={sortDataAlligatorX[19]} />
          ]} />
      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">СРАВНИТЕЛЬНАЯ ТАБЛИЦА ИЗМЕЛЬЧИТЕЛЕЙ ПИЩЕВЫХ ОТХОДОВ BORT СЕРИИ TITAN</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src={sortDataMasterEco[0]}
              href={sortDataMasterEco[1]}
              model={sortDataMasterEco[2]} />,
            <Model src={sortDataTitan4000[0]}
              href={sortDataTitan4000[1]}
              model={sortDataTitan4000[2]} />,
            <Model src={sortDataTitan4000Plus[0]}
              href={sortDataTitan4000Plus[1]}
              model={sortDataTitan4000Plus[2]} />,
            <Model src={sortDataTitan4000Control[0]}
              href={sortDataTitan4000Control[1]}
              model={sortDataTitan4000Control[2]} />]
          } />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Мотор постоянного тока' />
          ]} />
        <Wrapper title={<Title text='Мощность, Вт/лс' />}
          data={[<Item data={sortDataMasterEco[3]} />, <Item data={sortDataTitan4000[3]} />, <Item data={sortDataTitan4000Plus[3]} />, <Item data={sortDataTitan4000Control[3]} />,
          ]} />
        <Wrapper title={<Title text='Производительность, кг/мин' />}
          data={[<Item data={sortDataMasterEco[4]} />, <Item data={sortDataTitan4000[4]} />, <Item data={sortDataTitan4000Plus[4]} />, <Item data={sortDataTitan4000Control[4]} />,
          ]} />
        <Wrapper title={<Title text='Объем камеры измельчения, см3' />}
          data={[<Item data={sortDataMasterEco[5]} />, <Item data={sortDataTitan4000[5]} />, <Item data={sortDataTitan4000Plus[5]} />, <Item data={sortDataTitan4000Control[5]} />,
          ]} />
        <Wrapper title={<Title text='Число ступеней измельчения' />}
          data={[<Item data={sortDataMasterEco[6]} />, <Item data={sortDataTitan4000[6]} />, <Item data={sortDataTitan4000Plus[6]} />, <Item data={sortDataTitan4000Control[6]} />,
          ]} />
        <Wrapper title={<Title text='Система шумоизоляции' />}
          data={[<Item data={sortDataMasterEco[7]} />, <Item data={sortDataTitan4000[7]} />, <Item data={sortDataTitan4000Plus[7]} />, <Item data={sortDataTitan4000Control[7]} />,
          ]} />
        <Wrapper title={<Title text='Уровень шума, dB' />}
          data={[<Item data={sortDataMasterEco[8]} />, <Item data={sortDataTitan4000[8]} />, <Item data={sortDataTitan4000Plus[8]} />, <Item data={sortDataTitan4000Control[8]} />,
          ]} />
        <Wrapper title={<Title text='Защита от перегрузки, заклинивания, влагозащищенность' />}
          data={[<Item data={sortDataMasterEco[9]} />, <Item data={sortDataTitan4000[9]} />, <Item data={sortDataTitan4000Plus[9]} />, <Item data={sortDataTitan4000Control[9]} />,
          ]} />
        <Wrapper title={<Title text='Возможность Reset' />}
          data={[<Item data={sortDataMasterEco[10]} />, <Item data={sortDataTitan4000[10]} />, <Item data={sortDataTitan4000Plus[10]} />, <Item data={sortDataTitan4000Control[10]} />,
          ]} />
        <Wrapper title={<Title text='Тихий запуск' />}
          data={[<Item data={sortDataMasterEco[11]} />, <Item data={sortDataTitan4000[11]} />, <Item data={sortDataTitan4000Plus[11]} />, <Item data={sortDataTitan4000Control[11]} />,
          ]} />
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={sortDataMasterEco[12]} />, <Item data={sortDataTitan4000[12]} />, <Item data={sortDataTitan4000Plus[12]} />, <Item data={sortDataTitan4000Control[12]} />,
          ]} />
        <Wrapper title={<Title text='Автоматический реверс при заклинивании' />}
          data={[<Item data={sortDataMasterEco[13]} />, <Item data={sortDataTitan4000[13]} />, <Item data={sortDataTitan4000Plus[13]} />, <Item data={sortDataTitan4000Control[13]} />,
          ]} />
        <Wrapper title={<Title text='Автоматическое отключение' />}
          data={[<Item data={sortDataMasterEco[14]} />, <Item data={sortDataTitan4000[14]} />, <Item data={sortDataTitan4000Plus[14]} />, <Item data={sortDataTitan4000Control[14]} />,
          ]} />
        <Wrapper title={<Title text='Управление пневмокнопкой' />}
          data={[<Item data={sortDataMasterEco[15]} />, <Item data={sortDataTitan4000[15]} />, <Item data={sortDataTitan4000Plus[15]} />, <Item data={sortDataTitan4000Control[15]} />,
          ]} />
        <Wrapper title={<Title text='Управление беспроводной кнопкой' />}
          data={[<Item data={sortDataMasterEco[16]} />, <Item data={sortDataTitan4000[16]} />, <Item data={sortDataTitan4000Plus[16]} />, <Item data={sortDataTitan4000Control[16]} />,
          ]} />
        <Wrapper title={<Title text='Автоподача воды' />}
          data={[<Item data={sortDataMasterEco[17]} />, <Item data={sortDataTitan4000[17]} />, <Item data={sortDataTitan4000Plus[17]} />, <Item data={sortDataTitan4000Control[17]} />,
          ]} />
        <Wrapper title={<Title text='Вес изделия с навесным оборудованием, кг' />}
          data={[<Item data={sortDataMasterEco[18]} />, <Item data={sortDataTitan4000[18]} />, <Item data={sortDataTitan4000Plus[18]} />, <Item data={sortDataTitan4000Control[18]} />,
          ]} />
        <Wrapper title={<Title text='Рассчитан на количество, чел' />}
          data={[<Item data={sortDataMasterEco[19]} />, <Item data={sortDataTitan4000[19]} />, <Item data={sortDataTitan4000Plus[19]} />, <Item data={sortDataTitan4000Control[19]} />,
          ]} />
      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">СРАВНИТЕЛЬНАЯ ТАБЛИЦА ИЗМЕЛЬЧИТЕЛЕЙ ПИЩЕВЫХ ОТХОДОВ BORT СЕРИИ TITAN</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src={sortDataTitan5000[0]}
              href={sortDataTitan5000[1]}
              model={sortDataTitan5000[2]} />,
            <Model src={sortDataTitan5000Control[0]}
              href={sortDataTitan5000Control[1]}
              model={sortDataTitan5000Control[2]} />,
            <Model src={sortDataTitan9000[0]}
              href={sortDataTitan9000[1]}
              model={sortDataTitan9000[2]} />,
            <Model src={sortDataTitanExtra[0]}
              href={sortDataTitanExtra[1]}
              model={sortDataTitanExtra[2]} />]
          } />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Мотор постоянного тока' />
          ]} />
        <Wrapper title={<Title text='Мощность, Вт/лс' />}
          data={[<Item data={sortDataTitan5000[3]} />, <Item data={sortDataTitan5000Control[3]} />, <Item data={sortDataTitan9000[3]} />, <Item data={sortDataTitanExtra[3]} />
          ]} />
        <Wrapper title={<Title text='Производительность, кг/мин' />}
          data={[<Item data={sortDataTitan5000[4]} />, <Item data={sortDataTitan5000Control[4]} />, <Item data={sortDataTitan9000[4]} />, <Item data={sortDataTitanExtra[4]} />
          ]} />
        <Wrapper title={<Title text='Объем камеры измельчения, см3' />}
          data={[<Item data={sortDataTitan5000[5]} />, <Item data={sortDataTitan5000Control[5]} />, <Item data={sortDataTitan9000[5]} />, <Item data={sortDataTitanExtra[5]} />
          ]} />
        <Wrapper title={<Title text='Число ступеней измельчения' />}
          data={[<Item data={sortDataTitan5000[6]} />, <Item data={sortDataTitan5000Control[6]} />, <Item data={sortDataTitan9000[6]} />, <Item data={sortDataTitanExtra[6]} />
          ]} />
        <Wrapper title={<Title text='Система шумоизоляции' />}
          data={[<Item data={sortDataTitan5000[7]} />, <Item data={sortDataTitan5000Control[7]} />, <Item data={sortDataTitan9000[7]} />, <Item data={sortDataTitanExtra[7]} />
          ]} />
        <Wrapper title={<Title text='Уровень шума, dB' />}
          data={[<Item data={sortDataTitan5000[8]} />, <Item data={sortDataTitan5000Control[8]} />, <Item data={sortDataTitan9000[8]} />, <Item data={sortDataTitanExtra[8]} />
          ]} />
        <Wrapper title={<Title text='Защита от перегрузки, заклинивания, влагозащищенность' />}
          data={[<Item data={sortDataTitan5000[9]} />, <Item data={sortDataTitan5000Control[9]} />, <Item data={sortDataTitan9000[9]} />, <Item data={sortDataTitanExtra[9]} />
          ]} />
        <Wrapper title={<Title text='Возможность Reset' />}
          data={[<Item data={sortDataTitan5000[10]} />, <Item data={sortDataTitan5000Control[10]} />, <Item data={sortDataTitan9000[10]} />, <Item data={sortDataTitanExtra[10]} />
          ]} />
        <Wrapper title={<Title text='Тихий запуск' />}
          data={[<Item data={sortDataTitan5000[11]} />, <Item data={sortDataTitan5000Control[11]} />, <Item data={sortDataTitan9000[11]} />, <Item data={sortDataTitanExtra[11]} />
          ]} />
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={sortDataTitan5000[12]} />, <Item data={sortDataTitan5000Control[12]} />, <Item data={sortDataTitan9000[12]} />, <Item data={sortDataTitanExtra[12]} />
          ]} />
        <Wrapper title={<Title text='Автоматический реверс при заклинивании' />}
          data={[<Item data={sortDataTitan5000[13]} />, <Item data={sortDataTitan5000Control[13]} />, <Item data={sortDataTitan9000[13]} />, <Item data={sortDataTitanExtra[13]} />
          ]} />
        <Wrapper title={<Title text='Автоматическое отключение' />}
          data={[<Item data={sortDataTitan5000[14]} />, <Item data={sortDataTitan5000Control[14]} />, <Item data={sortDataTitan9000[14]} />, <Item data={sortDataTitanExtra[14]} />
          ]} />
        <Wrapper title={<Title text='Управление пневмокнопкой' />}
          data={[<Item data={sortDataTitan5000[15]} />, <Item data={sortDataTitan5000Control[15]} />, <Item data={sortDataTitan9000[15]} />, <Item data={sortDataTitanExtra[15]} />
          ]} />
        <Wrapper title={<Title text='Управление беспроводной кнопкой' />}
          data={[<Item data={sortDataTitan5000[16]} />, <Item data={sortDataTitan5000Control[16]} />, <Item data={sortDataTitan9000[16]} />, <Item data={sortDataTitanExtra[16]} />
          ]} />
        <Wrapper title={<Title text='Автоподача воды' />}
          data={[<Item data={sortDataTitan5000[17]} />, <Item data={sortDataTitan5000Control[17]} />, <Item data={sortDataTitan9000[17]} />, <Item data={sortDataTitanExtra[17]} />
          ]} />
        <Wrapper title={<Title text='Вес изделия с навесным оборудованием, кг' />}
          data={[<Item data={sortDataTitan5000[18]} />, <Item data={sortDataTitan5000Control[18]} />, <Item data={sortDataTitan9000[18]} />, <Item data={sortDataTitanExtra[18]} />
          ]} />
        <Wrapper title={<Title text='Рассчитан на количество, чел' />}
          data={[<Item data={sortDataTitan5000[19]} />, <Item data={sortDataTitan5000Control[19]} />, <Item data={sortDataTitan9000[19]} />, <Item data={sortDataTitanExtra[19]} />
          ]} />
      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">СРАВНИТЕЛЬНАЯ ТАБЛИЦА ИЗМЕЛЬЧИТЕЛЕЙ ПИЩЕВЫХ ОТХОДОВ BORT СЕРИИ TITAN</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src={sortDataTitanMaxPower[0]}
              href={sortDataTitanMaxPower[1]}
              model={sortDataTitanMaxPower[2]} />,
            <Model src={sortDataTitanMaxFullControl[0]}
              href={sortDataTitanMaxFullControl[1]}
              model={sortDataTitanMaxFullControl[2]} />,
            <Model src={sortDataTitan7000[0]}
              href={sortDataTitan7000[1]}
              model={sortDataTitan7000[2]} />]
          } />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Мотор постоянного тока' />
          ]} />
        <Wrapper title={<Title text='Мощность, Вт/лс' />}
          data={[<Item data={sortDataTitanMaxPower[3]} />, <Item data={sortDataTitanMaxFullControl[3]} />, <Item data={sortDataTitan7000[3]} />
          ]} />
        <Wrapper title={<Title text='Производительность, кг/мин' />}
          data={[<Item data={sortDataTitanMaxPower[4]} />, <Item data={sortDataTitanMaxFullControl[4]} />, <Item data={sortDataTitan7000[4]} />
          ]} />
        <Wrapper title={<Title text='Объем камеры измельчения, см3' />}
          data={[<Item data={sortDataTitanMaxPower[5]} />, <Item data={sortDataTitanMaxFullControl[5]} />, <Item data={sortDataTitan7000[5]} />
          ]} />
        <Wrapper title={<Title text='Число ступеней измельчения' />}
          data={[<Item data={sortDataTitanMaxPower[6]} />, <Item data={sortDataTitanMaxFullControl[6]} />, <Item data={sortDataTitan7000[6]} />
          ]} />
        <Wrapper title={<Title text='Система шумоизоляции' />}
          data={[<Item data={sortDataTitanMaxPower[7]} />, <Item data={sortDataTitanMaxFullControl[7]} />, <Item data={sortDataTitan7000[7]} />
          ]} />
        <Wrapper title={<Title text='Уровень шума, dB' />}
          data={[<Item data={sortDataTitanMaxPower[8]} />, <Item data={sortDataTitanMaxFullControl[8]} />, <Item data={sortDataTitan7000[8]} />
          ]} />
        <Wrapper title={<Title text='Защита от перегрузки, заклинивания, влагозащищенность' />}
          data={[<Item data={sortDataTitanMaxPower[9]} />, <Item data={sortDataTitanMaxFullControl[9]} />, <Item data={sortDataTitan7000[9]} />
          ]} />
        <Wrapper title={<Title text='Возможность Reset' />}
          data={[<Item data={sortDataTitanMaxPower[10]} />, <Item data={sortDataTitanMaxFullControl[10]} />, <Item data={sortDataTitan7000[10]} />
          ]} />
        <Wrapper title={<Title text='Тихий запуск' />}
          data={[<Item data={sortDataTitanMaxPower[11]} />, <Item data={sortDataTitanMaxFullControl[11]} />, <Item data={sortDataTitan7000[11]} />
          ]} />
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={sortDataTitanMaxPower[12]} />, <Item data={sortDataTitanMaxFullControl[12]} />, <Item data={sortDataTitan7000[12]} />
          ]} />
        <Wrapper title={<Title text='Автоматический реверс при заклинивании' />}
          data={[<Item data={sortDataTitanMaxPower[13]} />, <Item data={sortDataTitanMaxFullControl[13]} />, <Item data={sortDataTitan7000[13]} />
          ]} />
        <Wrapper title={<Title text='Автоматическое отключение' />}
          data={[<Item data={sortDataTitanMaxPower[14]} />, <Item data={sortDataTitanMaxFullControl[14]} />, <Item data={sortDataTitan7000[14]} />
          ]} />
        <Wrapper title={<Title text='Управление пневмокнопкой' />}
          data={[<Item data={sortDataTitanMaxPower[15]} />, <Item data={sortDataTitanMaxFullControl[15]} />, <Item data={sortDataTitan7000[15]} />
          ]} />
        <Wrapper title={<Title text='Управление беспроводной кнопкой' />}
          data={[<Item data={sortDataTitanMaxPower[16]} />, <Item data={sortDataTitanMaxFullControl[16]} />, <Item data={sortDataTitan7000[16]} />
          ]} />
        <Wrapper title={<Title text='Автоподача воды' />}
          data={[<Item data={sortDataTitanMaxPower[17]} />, <Item data={sortDataTitanMaxFullControl[17]} />, <Item data={sortDataTitan7000[17]} />
          ]} />
        <Wrapper title={<Title text='Вес изделия с навесным оборудованием, кг' />}
          data={[<Item data={sortDataTitanMaxPower[18]} />, <Item data={sortDataTitanMaxFullControl[18]} />, <Item data={sortDataTitan7000[18]} />
          ]} />
        <Wrapper title={<Title text='Рассчитан на количество, чел' />}
          data={[<Item data={sortDataTitanMaxPower[19]} />, <Item data={sortDataTitanMaxFullControl[19]} />, <Item data={sortDataTitan7000[19]} />
          ]} />
      </div>
    </>
  );

}

export default TableDisposer;