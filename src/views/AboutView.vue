<template>
    <div class="about-page">
      <h2>About Us</h2>
      <p>
        Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam in turpis a nulla dignissim ullamcorper vitae id elit. Proin vehicula massa
        vel magna dapibus, a convallis lacus rhoncus.
      </p>
  
      <div class="team-section">
        <h3>Our Team</h3>
        <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <img :src="member.image" :alt="member.name" class="team-member-image" />
          <h4>{{ member.name }}</h4>
          <p>{{ member.position }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teamMembers: [
          {
            id: 1,
            name: 'John Doe',
            position: 'Founder',
            image: 'https://picsum.photos/200/200?random=1',
          },
          {
            id: 2,
            name: 'Jane Smith',
            position: 'Developer',
            image: 'https://picsum.photos/200/200?random=2',
          },
          {
            id: 3,
            name: 'Alice Johnson',
            position: 'Designer',
            image: 'https://picsum.photos/200/200?random=3',
          },
          // Add more team members as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .about-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .team-section {
    margin-top: 20px;
  }
  
  .team-member {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .team-member-image {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  /* Add additional styling as needed */
  </style>
  