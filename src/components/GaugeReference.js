import React, { PureComponent } from "react";

export default class GaugeReference extends PureComponent {
  render() {
    return (
      <svg class="gauge" width="270" height="250" id="svg-container-gauge-1">
        <defs id="gradientDefs-container-gauge-1">
          <linearGradient
            id="gradientcontainer-gauge-1"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            spreadMethod="pad"
          >
            <stop
              offset="0%"
              stopColor="red"
              stopOpacity="1"
              id="redGradientStop1-container-gauge-1"
            />
            <stop
              offset="100%"
              stopColor="red"
              stopOpacity="1"
              id="redGradientStop2-container-gauge-1"
            />
          </linearGradient>
        </defs>
        <g
          className="arc"
          transform="translate(135,135)"
          id="arc-container-gauge-1"
        >
          <path
            fill="rgb(181,230,29)"
            d="M-74.2462120245875,74.24621202458748A105,105 0 0,1 6.429395695523604e-15,-105L5.204748896376251e-15,-85A85,85 0 0,0 -60.104076400856556,60.104076400856535Z"
            id="arcPath-container-gauge-1"
          />
          <path
            fill="rgb(255,165,0)"
            d="M6.429395695523604e-15,-105A105,105 0 0,1 47.66900247265246,-93.55568503977861L38.589192477861516,-75.73555455601125A85,85 0 0,0 5.204748896376251e-15,-85Z"
            id="arcPath-container-gauge-1"
          />
          <path
            fill="rgb(255,0,0)"
            d="M47.66900247265246,-93.55568503977861A105,105 0 0,1 74.24621202458749,74.24621202458748L60.10407640085654,60.104076400856535A85,85 0 0,0 38.589192477861516,-75.73555455601125Z"
            id="arcPath-container-gauge-1"
          />
        </g>
        <g
          class="label"
          transform="translate(135,135)"
          id="scaleLabel-container-gauge-1"
        >
          <text
            transform="rotate(-135) translate(-8,-118)"
            id="text-container-gauge-1"
          >
            50
          </text>
          <text
            transform="rotate(-108) translate(-8,-118)"
            id="text-container-gauge-1"
          >
            60
          </text>
          <text
            transform="rotate(-54) translate(-8,-118)"
            id="text-container-gauge-1"
          >
            80
          </text>
          <text
            transform="rotate(0) translate(-8,-118)"
            id="text-container-gauge-1"
          >
            100
          </text>
          <text
            transform="rotate(54) translate(-8,-118)"
            id="text-container-gauge-1"
          >
            120
          </text>
          <text
            transform="rotate(108) translate(-8,-118)"
            id="text-container-gauge-1"
          >
            140
          </text>
          <text
            transform="rotate(135) translate(-8,-118)"
            id="text-container-gauge-1"
          >
            150
          </text>
        </g>
        <g transform="translate(135,135)" id="radialAxis-container-gauge-1">
          <path
            d="M6.429395695523604e-15,-105Q3.9980127067990336,-104.92861542719844,4.996101161492953,-104.88107061421583C6.493233843533831,-104.80975339474192,8.488841018358897,-104.66702475268157,9.980884546939196,-104.52455187017388S13.459483602059356,-104.14455719613639,14.943058018694938,-103.93125139749793S18.399636126373835,-103.38616872111311,19.871380657843073,-103.1025132125842S23.298107556913806,-102.39357732143117,24.754688228489865,-102.04021467397187S28.143801280374216,-101.16903153586198,29.58191846835013,-100.74676222952222S32.92574024193165,-99.71530535446539,34.34213614832929,-99.2250859650402S37.63309181180407,-98.03569193460997,39.02455784433439,-97.47863296668761S42.25519232464152,-96.13399614091253,43.618576365198074,-95.51135951222443S46.781571236157816,-94.01452592599571,48.1137847813781,-93.32772210876696S51.20197484228104,-91.68208257159,52.499999999999986,-90.93266739736606S55.506389507091384,-89.14194981208614,56.76728583283776,-88.33162094727402S59.68506434692695,-86.39988186517743,60.90597550497582,-85.53047496528524S63.72853331927168,-83.4620903967059,64.90669355316355,-82.53557494799269S67.62763666638621,-80.33523044924117,68.76037706425494,-79.35370530719712S71.37354166510515,-77.02638536626867,72.45829620562176,-75.99207400103236S74.95776263579606,-73.54305074613836,75.99207400103236,-72.45829620562175S78.37218016515308,-69.89311746212366,79.35370530719713,-68.76037706425493S81.60905949927945,-66.08485378705541,82.53557494799267,-64.90669355316355S84.66106806539305,-62.12688666302469,85.53047496528525,-60.90597550497582S87.52129208246191,-58.028182158584116,88.33162094727403,-56.76728583283774S90.1832522231421,-53.798025157718946,90.93266739736605,-52.5S92.6409182915382,-49.445998326598385,93.32772210876696,-48.113784781378094S94.88872288353633,-44.98196040575462,95.51135951222443,-43.61857636519807S96.92157399876527,-40.416023876864706,97.47863296668763,-39.02455784433438S98.734866575615,-35.7585320547269,99.2250859650402,-34.34213614832926S100.32449292318246,-31.02003565632603,100.74676222952222,-29.58191846835012S101.68685202651258,-26.211268900065917,102.04021467397187,-24.754688228489858S102.81885770405529,-21.343125189312303,103.1025132125842,-19.871380657843066S103.71794559885949,-16.426632435330514,103.93125139749795,-14.94305801869493S104.38207898766619,-11.472928075519468,104.52455187017388,-9.980884546939166S104.80975339474192,-6.4932338435337975,104.88107061421583,-4.9961011614929225S105,-1.4988303484478804,105,0S104.95238783368974,3.498968479452067,104.88107061421583,4.996101161492946S104.66702475268157,8.488841018358887,104.52455187017388,9.980884546939189S104.14455719613639,13.45948360205937,103.93125139749793,14.943058018694956S103.38616872111311,18.399636126373856,103.1025132125842,19.87138065784309S102.39357732143118,23.298107556913784,102.04021467397189,24.754688228489837S101.16903153586199,28.143801280374184,100.74676222952223,29.581918468350096S99.71530535446539,32.925740241931614,99.2250859650402,34.34213614832926S98.03569193460999,37.63309181180406,97.47863296668763,39.02455784433438S96.13399614091253,42.25519232464151,95.51135951222443,43.61857636519807S94.01452592599571,46.7815712361578,93.32772210876696,48.113784781378094S91.68208257159,51.20197484228104,90.93266739736606,52.499999999999986S89.14194981208614,55.506389507091384,88.33162094727402,56.76728583283776S86.39988186517745,59.685064346926936,85.53047496528525,60.90597550497581S83.46209039670589,63.72853331927169,82.53557494799267,64.90669355316356S80.33523044924117,67.62763666638621,79.35370530719712,68.76037706425494S77.02638536626866,71.37354166510517,75.99207400103235,72.45829620562178S73.54305074613836,74.95776263579606,72.45829620562175,75.99207400103236S69.89311746212367,78.37218016515307,68.76037706425494,79.35370530719712S66.08485378705541,81.60905949927948,64.90669355316354,82.5355749479927S62.12688666302467,84.66106806539305,60.90597550497581,85.53047496528525S58.02818215858413,87.5212920824619,56.76728583283776,88.33162094727402S53.79802515771893,90.18325222314212,52.499999999999986,90.93266739736606S49.44599832659839,92.64091829153821,48.1137847813781,93.32772210876696S44.98196040575461,94.88872288353633,43.61857636519806,95.51135951222443S40.416023876864706,96.92157399876525,39.02455784433439,97.47863296668761S35.75853205472693,98.734866575615,34.34213614832929,99.2250859650402S31.020035656326023,100.32449292318248,29.58191846835011,100.74676222952223S26.211268900065924,101.68685202651258,24.754688228489865,102.04021467397187S21.343125189312286,102.81885770405529,19.871380657843048,103.1025132125842S16.42663243533052,103.71794559885947,14.943058018694938,103.93125139749793S11.47292807551945,104.38207898766619,9.980884546939148,104.52455187017388S6.4932338435338,104.80975339474192,4.996101161492929,104.88107061421583S1.4988303484478904,105,6.429395695523604e-15,105S-3.498968479452084,104.95238783368974,-4.9961011614929625,104.88107061421583S-8.488841018358881,104.66702475268157,-9.980884546939183,104.52455187017388S-13.459483602059384,104.14455719613639,-14.94305801869497,103.93125139749793S-18.399636126373856,103.38616872111311,-19.871380657843083,103.1025132125842S-23.29810755691375,102.39357732143118,-24.754688228489808,102.04021467397189S-28.143801280374227,101.16903153586198,-29.58191846835014,100.74676222952222S-32.92574024193159,99.71530535446539,-34.34213614832923,99.2250859650402S-37.63309181180409,98.03569193460997,-39.02455784433442,97.47863296668761S-42.2551923246415,96.13399614091254,-43.618576365198045,95.51135951222444S-46.78157123615775,94.01452592599576,-48.113784781378044,93.32772210876699S-51.20197484228103,91.68208257159,-52.49999999999998,90.93266739736606S-55.506389507091335,89.14194981208617,-56.76728583283771,88.33162094727405S-59.68506434692692,86.39988186517745,-60.90597550497579,85.53047496528525S-63.72853331927165,83.46209039670592,-64.90669355316352,82.5355749479927S-67.6276366663862,80.33523044924118,-68.76037706425493,79.35370530719713S-71.37354166510512,77.02638536626868,-72.45829620562174,75.99207400103238S-74.95776263579603,73.5430507461384,-75.99207400103234,72.45829620562179S-78.37218016515305,69.89311746212368,-79.3537053071971,68.76037706425495S-81.60905949927945,66.08485378705545,-82.53557494799267,64.90669355316358S-84.66106806539305,62.1268866630247,-85.53047496528525,60.90597550497582S-87.52129208246191,58.028182158584094,-88.33162094727403,56.76728583283773S-90.1832522231421,53.79802515771898,-90.93266739736605,52.500000000000036S-92.64091829153818,49.445998326598406,-93.32772210876695,48.11378478137811S-94.88872288353633,44.981960405754634,-95.51135951222443,43.61857636519807S-96.92157399876528,40.416023876864664,-97.47863296668764,39.024557844334346S-98.734866575615,35.75853205472692,-99.2250859650402,34.34213614832929S-100.32449292318246,31.020035656326034,-100.74676222952222,29.581918468350114S-101.6868520265126,26.21126890006588,-102.04021467397189,24.754688228489826S-102.81885770405529,21.343125189312335,-103.1025132125842,19.8713806578431S-103.71794559885947,16.426632435330536,-103.93125139749793,14.943058018694943S-104.38207898766619,11.472928075519462,-104.52455187017388,9.980884546939155S-104.80975339474192,6.49323384353376,-104.88107061421583,4.996101161492889Q-104.92861542719844,3.998012706798974,-105,1.2858791391047208e-14"
            transform="rotate(225)"
            fill="transparent"
            stroke="#344c69"
            strokeWidth="3.5"
            id="radial-container-gauge-1"
          />
        </g>
        <g transform="translate(135,135)" id="radialTicks-container-gauge-1">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#344c69"
            strokeWidth="1"
            transform="translate(-74.24621202458748,74.24621202458749) rotate(45)"
            id="tickLine-container-gauge-1"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#344c69"
            strokeWidth="1"
            transform="translate(-99.86093421099112,32.446784409369485) rotate(72)"
            id="tickLine-container-gauge-1"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#344c69"
            strokeWidth="1"
            transform="translate(-84.94678440936949,-61.71745149070967) rotate(126)"
            id="tickLine-container-gauge-1"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#344c69"
            strokeWidth="1"
            transform="translate(1.2858791391047208e-14,-105) rotate(-180)"
            id="tickLine-container-gauge-1"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#344c69"
            strokeWidth="1"
            transform="translate(84.94678440936949,-61.71745149070967) rotate(-126)"
            id="tickLine-container-gauge-1"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#344c69"
            strokeWidth="1"
            transform="translate(99.86093421099112,32.446784409369485) rotate(-72)"
            id="tickLine-container-gauge-1"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="10"
            stroke="#344c69"
            strokeWidth="1"
            transform="translate(74.24621202458748,74.24621202458749) rotate(-45)"
            id="tickLine-container-gauge-1"
          />
        </g>
        <g
          class="pointer"
          id="pointer-container-gauge-1"
          transform="translate(135,135)"
        >
          <path
            d="M5,0L0,-91L-5,0L0,5L5,0"
            transform="rotate(135)"
            fill="#000"
          />
        </g>
        <path
          id="pointer-triangle-container-gauge-1"
          d="M0,-5.26429605180997L6.078685485212741,5.26429605180997 -6.078685485212741,5.26429605180997Z"
          fill="#ffa500"
          stroke="#000"
          strokeWidth="1"
          transform="translate(135,20) rotate(-180)"
        />
      </svg>
    );
  }
}