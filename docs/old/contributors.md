# Contributors

## Setup Script

<script setup>
// import contributors from '../.vitepress/contributors.json'
</script>

<span v-pre>

<Contributors
heading="Contributors 6"
:contributors="contributors"
max-users="6"
/>

## Global

<Contributors
:contributors="$contributors"
heading="Contributors"
max-users="100"
size="48"
margin="36px 0 96px"
/>

</span>
