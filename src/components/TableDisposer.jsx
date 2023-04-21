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
            [<Model src='https://bort-global.ru/images/detailed/1053/c603bddf-0525-11ea-a645-a4bf01648335.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-alligator/'
              model='Alligator' />,
              <Model src='https://bort-global.ru/images/detailed/1053/c39aadba-0527-11ea-a645-a4bf01648335.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-alligator-plus/'
              model='Alligator Plus' />,
              <Model src='https://bort-global.ru/images/detailed/1053/13cc4990-e8da-11e9-a63c-a4bf01648335.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-alligator-max/'
              model='Alligator Max' />,
              <Model src='https://bort-global.ru/images/detailed/1208/1e1ed0a9-ad51-11ed-a95b-a4bf01842533_j1w1-dl.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-alligator-x/'
              model='Alligator X' />,
              <Model src='https://bort-global.ru/images/detailed/1211/7cb4bc28-d784-11ed-a95c-a4bf01842533_sk7j-9m.jpg'
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
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<YesIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />,
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
            [<Model src='https://bort-global.ru/images/detailed/396/a0b3e0b9-41cf-11ea-a656-a4bf01648335.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-master-eco/'
              model='Master ECO' />,
              <Model src='https://bort-global.ru/images/detailed/396/1c5ad7a6-5f1a-11eb-9ebc-a4bf01648335_ts44-50.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-titan-4000/'
              model='TITAN 4000' />,
              <Model src='https://bort-global.ru/images/detailed/396/1e3eaa7e-b8ef-11e9-a632-a4bf01648335.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-titan-4000-plus/'
              model='TITAN 4000 Plus' />,
              <Model src='https://bort-global.ru/images/detailed/1046/700973cb-5f1b-11eb-9ebc-a4bf01648335_foal-ym.jpg'
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
            [<Model src='https://bort-global.ru/images/detailed/396/97394343-d7ef-11ea-9eb8-a4bf01648335_9afq-sh.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-titan-5000/'
              model='TITAN 5000' />,
              <Model src='https://bort-global.ru/images/detailed/1046/a02435da-e063-11ea-9eb8-a4bf01648335_fvjc-mb.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-titan-5000-control/'
              model='TITAN 5000 Control' />,
              <Model src='https://bort-global.ru/images/detailed/1183/b3e9c431-2d24-11ed-a950-a4bf01842533_qy7y-mo.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-titan-7000/'
              model='TITAN 7000' />,
              <Model src='https://bort-global.ru/images/detailed/1209/e872e1cb-ad28-11ed-a95b-a4bf01842533_ypyd-hy.jpg'
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
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
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
            [<Model src='https://bort-global.ru/images/detailed/396/ad71cb0c-d7f1-11ea-9eb8-a4bf01648335_wmnk-sk.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-othodov-bort-titan-max-power/'
              model='TITAN MAX Power' />,
              <Model src='https://bort-global.ru/images/detailed/1046/0042d363-e065-11ea-9eb8-a4bf01648335_rsy5-xf.jpg'
              href='https://bort-global.ru/bytovaya-tehnika/izmelchiteli-othodov/izmelchitel-pischevyh-othodov-bort-titan-max-power-fullcontrol/'
              model='TITAN MAX FullControl' />,
              <Model src='https://bort-global.ru/images/detailed/1146/5ff5a1e1-88f9-11ec-a94d-a4bf01842533_iwir-zn.jpg'
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
        <Wrapper title={<Title text='Плавный пуск' />}
          data={[<Item data={<NoIcon />} />, <Item data={<NoIcon />} />, <Item data={<YesIcon />} />,
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