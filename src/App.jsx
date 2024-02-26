import React, { useState } from 'react';
import './App.css';
import { NavbarView } from './components/navbar/NavbarView';
import { MainView } from './components/main/MainView';
import { PartnersView } from './components/partners/PartnersView';
import { SolutionsView } from './components/solutions/SolutionsView';
import { GrowView } from './components/grow/GrowView';
import { ChooseView } from './components/choose/ChooseView';
import { NeedView } from './components/need/NeedView';
import { StatisticsView } from './components/statistics/StatisticsView';
import { SpeedView } from './components/speed/SpeedView';
import { PlansView } from './components/plans/PlansView';
import { TeamView } from './components/team/TeamView';
import { ClientsSayView } from './components/clientsSay/ClientsSayView';
import { NewsView } from './components/news/NewsView';
import { FooterView } from './components/footer/FooterView';
import { BurgerMenuView } from './components/burgerMenu/BurgerMenuView';

export const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      {menu && (
        <div className='flex lg:hidden fixed rounded-lg z-[50] top-[60px] right-0 flex-col shadow-md bg-white'>
          <BurgerMenuView setMenu={setMenu} />
        </div>
      )}
      <NavbarView menu={menu} setMenu={setMenu} />
      <div id='mainView'><MainView /></div>
      <div id='partnersView'><PartnersView /></div>
      <div id='solutionsView'><SolutionsView /></div>
      <div id='growView'><GrowView /></div>
      <div id='chooseView'><ChooseView /></div>
      <div id='needView'><NeedView /></div>
      <div id='statisticsView'><StatisticsView /></div>
      <div id='speedView'><SpeedView /></div>
      <div id='plansView'><PlansView /></div>
      <div id='teamView'><TeamView /></div>
      <div id='clientsSayView'><ClientsSayView /></div>
      <div id='newsView'><NewsView /></div>
      <FooterView />
    </div>
  );
}

export default App;
