import React from 'react';
import QueueAnim from 'rc-queue-anim';
import KPIsChart from './KPIsChart';
import AquisitionChart from './AquisitionChart';
import StatBoxes from './StatBoxes';
import EngagementStats from './EngagementStats';
import BenchmarkChart from './BenchmarkChart';
import CoinPriceChart from './CoinPriceChart';

const Main = () => (
  <div className="row">
    <div className="col-xl-6">
      <div className="box box-default">
        <div className="box-body">
          <KPIsChart />
        </div>
      </div>
    </div>
    <div className="col-xl-6">
      <div className="box box-default">
        <div className="box-body">
          <CoinPriceChart />
        </div>
      </div>
    </div>
  </div>
);

const Engagement = () => (
  <div className="box box-default">
    <div className="box-body">
      <div className="row">
        <div className="col-xl-12">
          <div className="box box-transparent">
            <div className="box-header">Monthly Report</div>
            <div className="box-body">
              <div className="row text-center metrics">
                <div className="col-xs-6 col-md-3 metric-box">
                  <span className="metric">2600 KCoin</span>
                  <span className="metric-info">Actual Balances</span>
                </div>
                <div className="col-xs-6 col-md-3 metric-box">
                  <span className="metric">2000 KCoin</span>
                  <span className="metric-info">Available Balances</span>
                </div>
                <div className="col-xs-6 col-md-3 metric-box">
                  <span className="metric">5000 Transaction</span>
                  <span className="metric-info">New Transaction</span>
                </div>
                <div className="col-xs-6 col-md-3 metric-box">
                  <span className="metric">50 User</span>
                  <span className="metric-info">New User</span>
                </div>
              </div>

              <EngagementStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="container-fluid no-breadcrumbs page-dashboard">

    <QueueAnim type="bottom" className="ui-animate">
      <Main />
      <div key="3"><Engagement /></div>
    </QueueAnim>

  </div>
);

module.exports = Dashboard;
