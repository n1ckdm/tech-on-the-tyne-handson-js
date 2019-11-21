<template>
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <router-link tag="a" class="navbar-brand" to="/" exact>
              <img src="/TechOnTheTyneSquare.png" alt="Tech on the Tyne" width="50" height="50" /> &nbsp; 
            </router-link>
          </li>
          <li>
            <router-link tag="a" class="navbar-brand" to="/takeaways" exact>Takeaways</router-link>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
      </div>
    </nav>
  </client-only>
</template>