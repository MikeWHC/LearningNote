
<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <Chat />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Chat from './components/Chat'

export default {
  name: 'App',
  components: {
    Chat
  }
}
</script>