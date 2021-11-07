const SVGPatternsFilters: React.FC = () => {
  return (
    <svg className="w-0 h-0">
      <g>
        {/* Patterns */}
        {/* Patterns */}
        {/* Patterns */}
        <pattern
          id="pat1"
          patternUnits="userSpaceOnUse"
          width="1200"
          height="700"
        >
          <image xlinkHref="/gate.jpg" width="1200" height="700" />
        </pattern>
        <pattern
          id="pat2"
          patternUnits="userSpaceOnUse"
          width="1200"
          height="700"
        >
          <image xlinkHref="/gate.jpg" width="1200" height="700" />
        </pattern>

        <pattern
          id="pat3"
          patternUnits="userSpaceOnUse"
          width="1500"
          height="1500"
        >
          <image xlinkHref="/gate1.jpg" width="1500" height="1500" />
        </pattern>

        <pattern
          id="pat4"
          patternUnits="userSpaceOnUse"
          width="400"
          height="400"
        >
          <image xlinkHref="/key.jpg" width="400" height="400" />
        </pattern>

        {/* Filters */}
        {/* Filters */}
        {/* Filters */}
        {/* INSET SHADOW */}
        {/* INSET SHADOW */}
        {/* INSET SHADOW */}
        {/* INSET SHADOW */}
        <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="2" />
          <feOffset dx="0" dy="-7" result="offsetblur" />
          <feFlood floodColor="rgb(0, 0, 0)" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <filter
          id="inset-shadow2"
          x="-100%"
          y="-100%"
          width="200%"
          height="200%"
        >
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="2" />
          <feOffset dx="0" dy="5" result="offsetblur" />
          <feFlood floodColor="rgb(0, 0, 0)" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <filter
          id="inset-shadow3"
          x="-100%"
          y="-100%"
          width="200%"
          height="200%"
        >
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feFlood floodColor="#16FBFF" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <filter id="inset-shadow4" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5" />
          <feOffset dx="7" dy="-7" result="offsetblur" />
          <feFlood floodColor="rgb(0, 0, 0)" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        <filter
          id="inset-shadow5"
          x="-100%"
          y="-100%"
          width="200%"
          height="200%"
        >
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5" />
          <feOffset dx="0" dy="5" result="offsetblur" />
          <feFlood floodColor="rgb(0, 0, 0)" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>

        {/* SOFT GLOW */}
        {/* SOFT GLOW */}
        {/* SOFT GLOW */}
        <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
          {/* <!-- Thicken out the original shape --> */}
          <feMorphology
            operator="dilate"
            radius="3"
            in="SourceAlpha"
            result="thicken"
          />

          {/* <!-- Use a gaussian blur to create the soft blurriness of the glow --> */}
          <feGaussianBlur in="thicken" stdDeviation="10" result="blurred">
            <animate
              attributeName="stdDeviation"
              from="5"
              to="8"
              dur="3s"
              repeatCount="indefinite"
              values="7; 10; 10; 7;"
              keyTimes="0; 0.33; 0.66; 1"
            />
          </feGaussianBlur>

          {/* <!-- Change the colour --> */}
          <feFlood floodColor="rgb(0,186,255)" result="glowColor" />

          {/* <!-- Color in the glows --> */}
          <feComposite
            in="glowColor"
            in2="blurred"
            operator="in"
            result="softGlow_colored"
          />

          {/* <!--	Layer the effects together --> */}
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="sofGlow1" height="300%" width="300%" x="-75%" y="-75%">
          {/* <!-- Thicken out the original shape --> */}
          <feMorphology
            operator="dilate"
            radius="9"
            in="SourceAlpha"
            result="thicken"
          />
          {/* <!-- Use a gaussian blur to create the soft blurriness of the glow --> */}
          <feGaussianBlur in="thicken" stdDeviation="10" result="blurred">
            <animate
              attributeName="stdDeviation"
              from="5"
              to="8"
              dur="3s"
              repeatCount="indefinite"
              values="7; 10; 10; 7;"
              keyTimes="0; 0.33; 0.66; 1"
            />
          </feGaussianBlur>
          {/* <!-- Change the colour --> */}
          <feFlood floodColor="rgb(160,255,255)" result="glowColor" />
          {/* <!-- Color in the glows --> */}
          <feComposite
            in="glowColor"
            in2="blurred"
            operator="in"
            result="softGlow_colored"
          />
          {/* <!--	Layer the effects together --> */}
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </g>
    </svg>
  );
};

export default SVGPatternsFilters;
