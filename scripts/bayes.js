var _0x2b60=['uVqfH','nCJdv','aFvHC','probabilityOfClass','KKxMF','log','exp','xdzdD','sort','restore','string','isArray','_isObject','undefined','docs','lastAdded','features','classFeatures','totalExamples','smoothing','_size','push','docToFeatures','_isString','iMUBR','YHRnV','tokenizer','tokenizeAndStem','getClassifications','indexOf','prototype','classify','alJwC','Not\x20trained','getProbabilities','train','value','addExample','label','classTotals','_isArray','length','umatS','hIHDe','KHYlS'];(function(_0x533cc6,_0x155c2e){var _0x2a08c9=function(_0x21c069){while(--_0x21c069){_0x533cc6['push'](_0x533cc6['shift']());}};_0x2a08c9(++_0x155c2e);}(_0x2b60,0x68));var _0x203f=function(_0x1b09ea,_0x37d9b8){_0x1b09ea=_0x1b09ea-0x0;var _0x55a18e=_0x2b60[_0x1b09ea];return _0x55a18e;};function BayesClassifier(){if(!(this instanceof BayesClassifier)){return new BayesClassifier();}this[_0x203f('0x0')]=[];this[_0x203f('0x1')]=0x0;this[_0x203f('0x2')]={};this[_0x203f('0x3')]={};this['classTotals']={};this[_0x203f('0x4')]=0x1;this[_0x203f('0x5')]=0x1;}BayesClassifier['prototype']['addSample']=function(_0x124153,_0x4a79b5){if(!this[_0x203f('0x6')](_0x124153)){return;}var _0x2b78b4={'label':_0x4a79b5,'value':_0x124153};this[_0x203f('0x0')][_0x203f('0x7')](_0x2b78b4);for(var _0x5366c0=0x0;_0x5366c0<_0x124153['length'];_0x5366c0++){this[_0x203f('0x2')][_0x124153[_0x5366c0]]=0x1;}};BayesClassifier['prototype'][_0x203f('0x8')]=function(_0x5c00ef){var _0x2bc72c=[];if(this[_0x203f('0x9')](_0x5c00ef)){if(_0x203f('0xa')!==_0x203f('0xb')){_0x5c00ef=this[_0x203f('0xc')][_0x203f('0xd')](_0x5c00ef);}else{var _0x46b61a=this[_0x203f('0xe')](_0x5c00ef);if(!this[_0x203f('0x6')](_0x46b61a)){throw'Not\x20trained';}return _0x46b61a;}}for(var _0x5ab302 in this[_0x203f('0x2')]){_0x2bc72c[_0x203f('0x7')](Number(!!~_0x5c00ef[_0x203f('0xf')](_0x5ab302)));}return _0x2bc72c;};BayesClassifier[_0x203f('0x10')][_0x203f('0x11')]=function(_0x1991f4){var _0x2cf50a=this['getClassifications'](_0x1991f4);if(!this[_0x203f('0x6')](_0x2cf50a)){if(_0x203f('0x12')!=='zVPod'){throw _0x203f('0x13');}else{for(var _0x3ac6ec in docFeatures){value=docFeatures[_0x3ac6ec];if(this[_0x203f('0x3')][label][value]){this['classFeatures'][label][value]++;}else{this[_0x203f('0x3')][label][value]=0x1+this[_0x203f('0x5')];}}}}return _0x2cf50a[0x0]['label'];};BayesClassifier[_0x203f('0x10')][_0x203f('0x14')]=function(_0x26c8da){var _0x4d79c2=this[_0x203f('0xe')](_0x26c8da);if(!this[_0x203f('0x6')](_0x4d79c2)){throw _0x203f('0x13');}return _0x4d79c2;};BayesClassifier[_0x203f('0x10')][_0x203f('0x15')]=function(){var _0x4f4775=this[_0x203f('0x0')]['length'];for(var _0x4b1a63=this[_0x203f('0x1')];_0x4b1a63<_0x4f4775;_0x4b1a63++){var _0x5d56a9=this[_0x203f('0x8')](this[_0x203f('0x0')][_0x4b1a63][_0x203f('0x16')]);this[_0x203f('0x17')](_0x5d56a9,this[_0x203f('0x0')][_0x4b1a63][_0x203f('0x18')]);this[_0x203f('0x1')]++;}};BayesClassifier[_0x203f('0x10')][_0x203f('0x17')]=function(_0x2f85fa,_0x309faf){if(!this[_0x203f('0x3')][_0x309faf]){this[_0x203f('0x3')][_0x309faf]={};this[_0x203f('0x19')][_0x309faf]=0x1;}this[_0x203f('0x4')]++;if(this[_0x203f('0x1a')](_0x2f85fa)){var _0x1a98b9=_0x2f85fa[_0x203f('0x1b')];this[_0x203f('0x19')][_0x309faf]++;while(_0x1a98b9--){if(_0x2f85fa[_0x1a98b9]){if(this[_0x203f('0x3')][_0x309faf][_0x1a98b9]){if(_0x203f('0x1c')!=='umatS'){this[_0x203f('0x3')][_0x309faf][value]++;}else{this[_0x203f('0x3')][_0x309faf][_0x1a98b9]++;}}else{if(_0x203f('0x1d')===_0x203f('0x1e')){this[_0x203f('0x3')][_0x309faf][value]=0x1+this[_0x203f('0x5')];}else{this[_0x203f('0x3')][_0x309faf][_0x1a98b9]=0x1+this[_0x203f('0x5')];}}}}}else{for(var _0x51a81b in _0x2f85fa){if(_0x203f('0x1f')!==_0x203f('0x20')){value=_0x2f85fa[_0x51a81b];if(this[_0x203f('0x3')][_0x309faf][value]){this[_0x203f('0x3')][_0x309faf][value]++;}else{if('aFvHC'===_0x203f('0x21')){this[_0x203f('0x3')][_0x309faf][value]=0x1+this[_0x203f('0x5')];}else{if(this[_0x203f('0x3')][_0x309faf][_0x1a98b9]){this[_0x203f('0x3')][_0x309faf][_0x1a98b9]++;}else{this[_0x203f('0x3')][_0x309faf][_0x1a98b9]=0x1+this[_0x203f('0x5')];}}}}else{return;}}}};BayesClassifier[_0x203f('0x10')][_0x203f('0x22')]=function(_0xe5b62d,_0x1352da){var _0x3fd17b=0x0;var _0x4fb718=0x0;if(this[_0x203f('0x1a')](_0xe5b62d)){var _0x54f07a=_0xe5b62d['length'];while(_0x54f07a--){if(_0xe5b62d[_0x54f07a]){if(_0x203f('0x23')!==_0x203f('0x23')){this['classFeatures'][_0x1352da]={};this[_0x203f('0x19')][_0x1352da]=0x1;}else{_0x3fd17b=this['classFeatures'][_0x1352da][_0x54f07a]||this[_0x203f('0x5')];_0x4fb718+=Math[_0x203f('0x24')](_0x3fd17b/this[_0x203f('0x19')][_0x1352da]);}}}}else{for(var _0x1241f0 in _0xe5b62d){_0x3fd17b=this['classFeatures'][_0x1352da][_0xe5b62d[_0x1241f0]]||this[_0x203f('0x5')];_0x4fb718+=Math[_0x203f('0x24')](_0x3fd17b/this['classTotals'][_0x1352da]);}}var _0x78828e=this['classTotals'][_0x1352da]/this['totalExamples'];_0x4fb718=_0x78828e*Math[_0x203f('0x25')](_0x4fb718);return _0x4fb718;};BayesClassifier[_0x203f('0x10')][_0x203f('0xe')]=function(_0x188814){var _0x3e16f9=this;var _0x3629cb=[];for(var _0x2709d1 in this[_0x203f('0x3')]){if(_0x203f('0x26')===_0x203f('0x26')){_0x3629cb['push']({'label':_0x2709d1,'value':_0x3e16f9[_0x203f('0x22')](this['docToFeatures'](_0x188814),_0x2709d1)});}else{this[_0x203f('0x0')]=_0x3e16f9[_0x203f('0x0')];this[_0x203f('0x1')]=_0x3e16f9[_0x203f('0x1')];this[_0x203f('0x2')]=_0x3e16f9[_0x203f('0x2')];this[_0x203f('0x3')]=_0x3e16f9[_0x203f('0x3')];this[_0x203f('0x19')]=_0x3e16f9[_0x203f('0x19')];this['totalExamples']=_0x3e16f9[_0x203f('0x4')];this[_0x203f('0x5')]=_0x3e16f9[_0x203f('0x5')];this[_0x203f('0xc')]=tokenizer;return this;}}return _0x3629cb[_0x203f('0x27')](function(_0x1d013a,_0x37ed1a){return _0x37ed1a[_0x203f('0x16')]-_0x1d013a[_0x203f('0x16')];});};BayesClassifier[_0x203f('0x10')][_0x203f('0x28')]=function(_0x70b00){this[_0x203f('0x0')]=_0x70b00['docs'];this[_0x203f('0x1')]=_0x70b00[_0x203f('0x1')];this[_0x203f('0x2')]=_0x70b00[_0x203f('0x2')];this[_0x203f('0x3')]=_0x70b00[_0x203f('0x3')];this[_0x203f('0x19')]=_0x70b00['classTotals'];this[_0x203f('0x4')]=_0x70b00[_0x203f('0x4')];this['smoothing']=_0x70b00['smoothing'];this[_0x203f('0xc')]=tokenizer;return this;};BayesClassifier['prototype'][_0x203f('0x9')]=function(_0x1c15f9){return typeof _0x1c15f9===_0x203f('0x29')||_0x1c15f9 instanceof String;};BayesClassifier[_0x203f('0x10')][_0x203f('0x1a')]=function(_0x2324b4){return Array[_0x203f('0x2a')](_0x2324b4);};BayesClassifier[_0x203f('0x10')][_0x203f('0x2b')]=function(_0x19439f){return _0x19439f instanceof Object;};BayesClassifier['prototype'][_0x203f('0x6')]=function(_0xfd0300){if(this['_isArray'](_0xfd0300)||this[_0x203f('0x9')](_0xfd0300)||this[_0x203f('0x2b')](_0xfd0300)){return _0xfd0300[_0x203f('0x1b')];}return 0x0;};if(typeof window!==_0x203f('0x2c')){window['BayesClassifier']=BayesClassifier;}
