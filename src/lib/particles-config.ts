export const heroParticlesConfig = {
  fullScreen: false,
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: ["#00c2b8", "#008b8b", "#f5a623"],
    },
    links: {
      color: "#00c2b8",
      distance: 180,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none" as const,
      random: true,
      straight: false,
      outModes: {
        default: "bounce" as const,
      },
    },
    number: {
      value: 60,
      density: {
        enable: true,
      },
    },
    opacity: {
      value: { min: 0.2, max: 0.6 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 4 },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab" as const,
      },
      onClick: {
        enable: true,
        mode: "push" as const,
      },
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.6,
          color: "#f5a623",
        },
      },
      push: {
        quantity: 3,
      },
    },
  },
  detectRetina: true,
};

export const mobileParticlesConfig = {
  ...heroParticlesConfig,
  particles: {
    ...heroParticlesConfig.particles,
    number: {
      value: 30,
      density: {
        enable: true,
      },
    },
  },
};
