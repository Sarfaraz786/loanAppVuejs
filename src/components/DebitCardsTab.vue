<template>
  <div class="row">
    <div class="col-md-6 col-sm-12">
      <div class="text-positive text-right cursor-pointer q-mb-sm"><q-icon class="font-size-16" name="visibility" /><span class="q-ml-sm font-weight-500">Show card number</span></div>
      <q-card class="bg-positive text-white green-card shadow-0 border-radius-8">
        <q-card-section class="q-pa-lg">
          <div class="q-mb-lg flex justify-end"><img src="~assets/aspire-white-logo.svg" /></div>
          <div class="text-h5 q-mb-lg holder-name">Mark Henry</div>
          <div class="card-number flex justify-start items-center q-mb-sm">
            <div class="q-mr-lg flex"><div v-for="n in 4" :key="n" class="card-dot q-mr-sm"></div></div>
            <div class="q-mr-lg flex"><div v-for="n in 4" :key="n" class="card-dot q-mr-sm"></div></div>
            <div class="q-mr-lg flex"><div v-for="n in 4" :key="n" class="card-dot q-mr-sm"></div></div>
            <div><div>2020</div></div>
          </div>
          <div class="expiry-cvv flex justify-start items-center">
            <div class="q-mr-lg">Thru: 12/20</div>
            <div class="cvv">CVV: <strong class="text-weight-bold">***</strong> </div>
          </div>
          <div class="flex justify-end"><img src="~assets/visa-logo.svg" /></div>
        </q-card-section>
      </q-card>
      <div class="carousel-option text-center q-my-sm">
        <q-icon name="more_horiz" />
      </div>
      <CardOption />
    </div>
    <div class="col-md-6 col-sm-12">
      <q-list class="q-pt-lg">
        <q-expansion-item
          group="somegroup" 
          icon="credit_card" 
          label="Card details" 
          header-class="bg-cgrey text-cprimary border-radius-8 q-pa-lg"
          expand-icon-class="text-cprimary"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          group="somegroup"
          icon= "sync_alt"
          label="Recent transactions"
          default-opened
          header-class="bg-cgrey text-cprimary border-radius-8 q-pa-lg"
          expand-icon-class="text-cprimary"
        >
          <q-card class="">
            <q-card-section>
              <q-list padding class="rounded-borders">

                <q-item v-ripple>
                  <q-item-section avatar top>
                    <q-avatar icon="inventory_2" color="cgrey" text-color="sky" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label lines="1">Hamleys</q-item-label>
                    <q-item-label caption>20 May 2020</q-item-label>
                    <div class="flex q-my-sm cursor-pointer">
                      <img style="width:20px" class="q-mb-xs" src="~/assets/freeze-card.svg" />
                      <div class="text-primary q-ml-sm font-size-12">Refund on debit card</div>
                    </div>
                  </q-item-section>

                  <q-item-section side>
                    <div class="flex items-center">
                      <span class="text-positive text-weight-bold">+ S$ 150</span>
                      <q-icon class="font-size-25" name="chevron_right" color="grey-4" />
                    </div>
                    
                  </q-item-section>
                </q-item>

                <q-separator />

                <q-item v-ripple>
                  <q-item-section avatar top>
                    <q-avatar class="rotate-45" icon="flight" color="pink-1" text-color="red" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label lines="1">Hamleys</q-item-label>
                    <q-item-label caption>March 1st, 2019</q-item-label>
                    <div class="flex q-my-sm cursor-pointer">
                      <img style="width:20px" class="q-mb-xs" src="~/assets/freeze-card.svg" />
                      <div class="text-primary q-ml-sm font-size-12">Charged to debit card</div>
                    </div>
                  </q-item-section>

                  <q-item-section side>
                    <div class="flex items-center">
                      <span class="text-dark text-weight-bold">+ S$ 150</span>
                      <q-icon class="font-size-25" name="chevron_right" color="grey-4" />
                    </div>
                  </q-item-section>
                </q-item>

                <q-separator />

                <q-item v-ripple>
                  <q-item-section avatar top>
                    <q-avatar icon="contactless" color="cgrey" text-color="warning" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label lines="1">Hamleys</q-item-label>
                    <q-item-label caption>January 15th, 2019</q-item-label>
                    <div class="flex q-my-sm cursor-pointer">
                      <img style="width:20px" class="q-mb-xs" src="~/assets/freeze-card.svg" />
                      <div class="text-primary q-ml-sm font-size-12">Charged to debit card</div>
                    </div>
                  </q-item-section>

                  <q-item-section side>
                      <div class="flex items-center">
                      <span class="text-dark text-weight-bold">+ S$ 150</span>
                      <q-icon class="font-size-25" name="chevron_right" color="grey-4" />
                    </div>
                  </q-item-section>
                </q-item>

                <q-separator />

                <q-item v-ripple>
                  <q-item-section avatar top>
                    <q-avatar icon="inventory_2" color="cgrey" text-color="sky" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label lines="1">Hamleys</q-item-label>
                    <q-item-label caption>20 May 2020</q-item-label>
                    <div class="flex q-my-sm cursor-pointer">
                      <img style="width:20px" class="q-mb-xs" src="~/assets/freeze-card.svg" />
                      <div class="text-primary q-ml-sm font-size-12">Charged to debit card</div>
                    </div>
                  </q-item-section>

                  <q-item-section side>
                      <div class="flex items-center">
                      <span class="text-dark text-weight-bold">+ S$ 150</span>
                      <q-icon class="font-size-25" name="chevron_right" color="grey-4" />
                    </div>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-card-section>
          </q-card>
          <q-item clickable class="text-positive text-center bg-cgrey all-card-trans">
            <q-item-section>
              View all card transactions
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import CardOption from 'components/CardOption.vue'
export default {
  name: 'DebitCards',
  components: {CardOption},
  data () {
    return {
    }
  }
}
</script>
