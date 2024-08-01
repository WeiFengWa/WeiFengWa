<template>
  <wf-button-group>
    <wf-button type="primary" icon="iconamoon:player-start-duotone" square />
    <wf-button
      type="primary"
      icon="iconamoon:player-play-duotone"
      square
      disabled
    />
    <wf-button type="primary" icon="iconamoon:player-end-duotone" square />
  </wf-button-group>
  <wf-button-group circle>
    <wf-button icon="iconamoon:player-start-duotone" />
    <wf-button loading />
    <wf-button loading />
    <wf-button icon="iconamoon:player-end-duotone" />
  </wf-button-group>
</template>
