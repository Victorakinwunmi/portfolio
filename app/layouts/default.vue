<template>
  <div class="DefaultLayout">
       <HeaderContainer>
          <template #logo>
            <HeaderLogo />
          </template>
          <template #hamburgermenuopen>
            <button>
              <img
                src="/assets/icon/Menu.svg"
                class="w-8 h-8"
              />
            </button>
          </template>
          <template #hamburgermenuclose>
            <button>
              <img
                src="/assets/icon/Close.svg"
                class="w-8 h-8"
              />
            </button>
          </template>
          <template #menu>
            <HeaderMenu>
              <template #abouttext>About</template>
              <template #workstext>Works</template>
              <template #servicestext>Services</template>
              <template #contacttext>Contact</template>
            </HeaderMenu>
          </template>
          <template #login>
            <HeaderLogin>
              <template #num_btn>
                <button>+2348104782750</button>
              </template>
              <template #ws_btn>
                    <button>
                        <img
                            src="/assets/icon/Whatsapp.svg"
                            class="w-8 h-8 cursor-pointer"
                        />
                    </button>
              </template>
              <template #email_btn>
                    <button>
                        <img
                            src="/assets/icon/Gmail.svg"
                            class="w-8 h-8 cursor-pointer"
                        />
                    </button>
              </template>
            </HeaderLogin>   
          </template>
      </HeaderContainer>
      <slot/>
  </div>
</template>

<script>
export default {
data(){
  return{
  }
},
methods:{
}
}
</script>

<style>

</style>