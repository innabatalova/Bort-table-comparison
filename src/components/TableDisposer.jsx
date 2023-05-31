import React from 'react';

import Wrapper from './Wrapper';
import Model from './Model';
import Title from './Title';
import Item from './Item';
import NoIcon from './NoIcon';
import YesIcon from './YesIcon';

const TableDisposer = () => {
  return (
    <>
      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">СРАВНИТЕЛЬНАЯ ТАБЛИЦА ИЗМЕЛЬЧИТЕЛЕЙ ПИЩЕВЫХ ОТХОДОВ BORT СЕРИИ ALLIGATOR</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src='https://bort-global.ru/photo/product/93410754'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-alligator/'
              model='Alligator' />,
              <Model src='https://bort-global.ru/photo/product/93410761'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-alligator-plus/'
              model='Alligator Plus' />,
              <Model src='https://bort-global.ru/photo/product/93410778'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-alligator-max/'
              model='Alligator Max' />,
              <Model src='https://bort-global.ru/photo/product/93414707'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-alligator-x/'
              model='Alligator X' />,
              <Model src='https://bort-global.ru/photo/product/93417425'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-alligator-mega/'
              model='Alligator Mega' />]
          } />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Высокопроизводительный индукционный мотор' />
          ]} />
        <Wrapper title={<Title text='Мощность, Вт/лс' />}
          data={[<Item data='560/0,75' />, <Item data='780/1' />, <Item data='560/0,75' />, <Item data='560/0,75' />, <Item data='560/0,75' />,
          ]} />
        <Wrapper title={<Title text='Производительность, кг/мин' />}
          data={[<Item data='4.2' />, <Item data='5.2' />, <Item data='5.2' />, <Item data='4.2' />, <Item data='5.2' />,
          ]} />
        <Wrapper title={<Title text='Объем камеры измельчения, см3' />}
          data={[<Item data='1450' />, <Item data='1450' />, <Item data='1600' />, <Item data='1100' />, <Item data='1600' />,
          ]} />
        <Wrapper title={<Title text='Число ступеней измельчения' />}
          data={[<Item data='3' />, <Item data='3' />, <Item data='3' />, <Item data='3' />, <Item data='3' />,
          ]} />
        <Wrapper title={<Title text='Система шумоизоляции' />}
          data={[<Item data='полная' />, <Item data='частичная' />, <Item data='полная' />, <Item data='полная' />, <Item data='полная' />,
          ]} />
        <Wrapper title={<Title text='Уровень шума, dB' />}
          data={[<Item data='55±7' />, <Item data='55±7' />, <Item data='55±7' />, <Item data='54±7' />, <Item data='55±7' />,
          ]} />
        <Wrapper title={<Title text='Защита от перегрузки, заклинивания, влагозащищенность' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Возможность Reset' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Тихий запуск' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />,
          ]} />
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<NoIcon />} />,
          ]} />
        <Wrapper title={<Title text='Автоматический реверс при заклинивании' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Автоматическое отключение' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Управление пневмокнопкой' />}
          data={[<Item data={<YesIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Управление беспроводной кнопкой' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Вес изделия с навесным оборудованием, кг' />}
          data={[<Item data='7' />, <Item data='9' />, <Item data='9' />, <Item data='4.6' />, <Item data='9' />,
          ]} />
        <Wrapper title={<Title text='Рассчитан на количество, чел' />}
          data={[<Item data='до 6' />, <Item data='до 8' />, <Item data='до 8' />, <Item data='до 6' />, <Item data='до 8' />,
          ]} />
      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">СРАВНИТЕЛЬНАЯ ТАБЛИЦА ИЗМЕЛЬЧИТЕЛЕЙ ПИЩЕВЫХ ОТХОДОВ BORT СЕРИИ TITAN</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src='https://bort-global.ru/photo/product/91275752'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-master-eco/'
              model='Master ECO' />,
              <Model src='https://bort-global.ru/photo/product/91275769'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-titan-4000/'
              model='TITAN 4000' />,
              <Model src='https://bort-global.ru/photo/product/91275776'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-titan-4000-plus/'
              model='TITAN 4000 Plus' />,
              <Model src='https://bort-global.ru/photo/product/93410242'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-titan-4000-control/'
              model='TITAN 4000 Control' />]
          } />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Мотор постоянного тока' />
          ]} />
        <Wrapper title={<Title text='Мощность, Вт/лс' />}
          data={[<Item data='390/0,5' />, <Item data='390/0,5' />, <Item data='560/0,75' />, <Item data='390/0,5' />,
          ]} />
        <Wrapper title={<Title text='Производительность, кг/мин' />}
          data={[<Item data='3.2' />, <Item data='4.2' />, <Item data='4.2' />, <Item data='4.2' />,
          ]} />
        <Wrapper title={<Title text='Объем камеры измельчения, см3' />}
          data={[<Item data='1000' />, <Item data='1310' />, <Item data='1400' />, <Item data='1310' />,
          ]} />
        <Wrapper title={<Title text='Число ступеней измельчения' />}
          data={[<Item data='2' />, <Item data='3' />, <Item data='3' />, <Item data='3' />,
          ]} />
        <Wrapper title={<Title text='Система шумоизоляции' />}
          data={[<Item data='нет' />, <Item data='частичная' />, <Item data='частичная' />, <Item data='частичная' />,
          ]} />
        <Wrapper title={<Title text='Уровень шума, dB' />}
          data={[<Item data='58±7' />, <Item data='60±7' />, <Item data='57±7' />, <Item data='60±7' />,
          ]} />
        <Wrapper title={<Title text='Защита от перегрузки, заклинивания, влагозащищенность' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Возможность Reset' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Тихий запуск' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />,
          ]} />
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />,
          ]} />
        <Wrapper title={<Title text='Автоматический реверс при заклинивании' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />,
          ]} />
        <Wrapper title={<Title text='Автоматическое отключение' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Управление пневмокнопкой' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Управление беспроводной кнопкой' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Вес изделия с навесным оборудованием, кг' />}
          data={[<Item data='4.5' />, <Item data='4.5' />, <Item data='6' />, <Item data='4.5' />,
          ]} />
        <Wrapper title={<Title text='Рассчитан на количество, чел' />}
          data={[<Item data='до 3' />, <Item data='до 4' />, <Item data='до 4' />, <Item data='до 4' />,
          ]} />
      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">СРАВНИТЕЛЬНАЯ ТАБЛИЦА ИЗМЕЛЬЧИТЕЛЕЙ ПИЩЕВЫХ ОТХОДОВ BORT СЕРИИ TITAN</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src='https://bort-global.ru/photo/product/91275783'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-titan-5000/'
              model='TITAN 5000' />,
              <Model src='https://bort-global.ru/photo/product/93410259'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-titan-5000-control/'
              model='TITAN 5000 Control' />,
              <Model src='https://bort-global.ru/photo/product/93413519'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-titan-7000/'
              model='TITAN 7000' />,
              <Model src='https://bort-global.ru/photo/product/93415827'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-titan-9000/'
              model='TITAN 9000' />]
          } />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Мотор постоянного тока' />
          ]} />
        <Wrapper title={<Title text='Мощность, Вт/лс' />}
          data={[<Item data='560/0,75' />, <Item data='560/0,75' />, <Item data='780/1' />, <Item data='560/0,75' />,
          ]} />
        <Wrapper title={<Title text='Производительность, кг/мин' />}
          data={[<Item data='5.2' />, <Item data='5.2' />, <Item data='5.2' />, <Item data='3.2' />,
          ]} />
        <Wrapper title={<Title text='Объем камеры измельчения, см3' />}
          data={[<Item data='1400' />, <Item data='1400' />, <Item data='1000' />, <Item data='1450' />,
          ]} />
        <Wrapper title={<Title text='Число ступеней измельчения' />}
          data={[<Item data='3' />, <Item data='3' />, <Item data='3' />, <Item data='3' />,
          ]} />
        <Wrapper title={<Title text='Система шумоизоляции' />}
          data={[<Item data='полная' />, <Item data='полная' />, <Item data='нет' />, <Item data='полная' />,
          ]} />
        <Wrapper title={<Title text='Уровень шума, dB' />}
          data={[<Item data='65±7' />, <Item data='65±7' />, <Item data='58±7' />, <Item data='58±7' />,
          ]} />
        <Wrapper title={<Title text='Защита от перегрузки, заклинивания, влагозащищенность' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Возможность Reset' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Тихий запуск' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />
          ]} />
        <Wrapper title={<Title text='Автоматический реверс при заклинивании' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Автоматическое отключение' />}
          data={[<Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Управление пневмокнопкой' />}
          data={[<Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Управление беспроводной кнопкой' />}
          data={[<Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Вес изделия с навесным оборудованием, кг' />}
          data={[<Item data='5.5' />, <Item data='5.5' />, <Item data='4' />, <Item data='6.8' />,
          ]} />
        <Wrapper title={<Title text='Рассчитан на количество, чел' />}
          data={[<Item data='до 6' />, <Item data='до 6' />, <Item data='до 3' />, <Item data='до 8' />,
          ]} />
      </div>

      <div className='comparison'>
        <Wrapper classHead='comparison-wrapper_head' title={<div className="comparison-title">СРАВНИТЕЛЬНАЯ ТАБЛИЦА ИЗМЕЛЬЧИТЕЛЕЙ ПИЩЕВЫХ ОТХОДОВ BORT СЕРИИ TITAN</div>}
          classHeadTitle='comparison-wrapper__title_head'
          classHeadData='comparison-wrapper__data_head'
          data={
            [<Model src='https://bort-global.ru/photo/product/91275790'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-titan-max-power/'
              model='TITAN MAX Power' />,
              <Model src='https://bort-global.ru/photo/product/93410266'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-titan-max-power-fullcontrol/'
              model='TITAN MAX FullControl' />,
              <Model src='https://bort-global.ru/photo/product/93411812'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-titan-extra/'
              model='TITAN Extra' />]
          } />

        <Wrapper title={<Title text='Тип мотора' />}
          data={[<Item data='Мотор постоянного тока' />
          ]} />
        <Wrapper title={<Title text='Мощность, Вт/лс' />}
          data={[<Item data='780/1' />, <Item data='780/1' />, <Item data='560/0,75' />,
          ]} />
        <Wrapper title={<Title text='Производительность, кг/мин' />}
          data={[<Item data='4.2' />, <Item data='5.2' />, <Item data='4.2' />,
          ]} />
        <Wrapper title={<Title text='Объем камеры измельчения, см3' />}
          data={[<Item data='1400' />, <Item data='1400' />, <Item data='1400' />,
          ]} />
        <Wrapper title={<Title text='Число ступеней измельчения' />}
          data={[<Item data='3' />, <Item data='3' />, <Item data='3' />,
          ]} />
        <Wrapper title={<Title text='Система шумоизоляции' />}
          data={[<Item data='полная' />, <Item data='полная' />, <Item data='полная' />,
          ]} />
        <Wrapper title={<Title text='Уровень шума, dB' />}
          data={[<Item data='65±7' />, <Item data='65±7' />, <Item data='57±7' />,
          ]} />
        <Wrapper title={<Title text='Защита от перегрузки, заклинивания, влагозащищенность' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Возможность Reset' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Тихий запуск' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />
          ]} />
        <Wrapper title={<Title text='Автоматический реверс при заклинивании' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Автоматическое отключение' />}
          data={[<Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<NoIcon />} />,
          ]} />
        <Wrapper title={<Title text='Управление пневмокнопкой' />}
          data={[<Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />,
          ]} />
        <Wrapper title={<Title text='Управление беспроводной кнопкой' />}
          data={[<Item data={<NoIcon />} />, <Item data={<YesIcon />} />, <Item data={<NoIcon />} />,
          ]} />
        <Wrapper title={<Title text='Вес изделия с навесным оборудованием, кг' />}
          data={[<Item data='5.5' />, <Item data='5.5' />, <Item data='6.8' />,
          ]} />
        <Wrapper title={<Title text='Рассчитан на количество, чел' />}
          data={[<Item data='до 6' />, <Item data='до 6' />, <Item data='до 6' />,
          ]} />
      </div>
    </>
  );

}

export default TableDisposer;