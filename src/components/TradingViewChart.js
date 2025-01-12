import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({range}) {
  const container = useRef();

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "2",
        "locale": "en",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "gridColor": "rgba(0, 0, 0, 0.06)",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "range": "${range}",
        "allow_symbol_change": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    
    container.current.appendChild(script);
  }, [range]); // Add range to dependency array

  return (
    <div  style={{width: "100%", height: "91%"}}>
      <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)" }}></div>
    </div>
    </div>
  );
}

export default memo(TradingViewWidget);