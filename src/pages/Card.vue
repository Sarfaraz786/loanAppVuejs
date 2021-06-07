<template>
  <q-page class="flex card-page">
    <div class="q-pa-md full-width full-page">
      <div class="card-header q-pa-md-none q-pa-xs-md">
        <div class="row q-pb-sm">
          <div class="col"><div>Available balance</div></div>
        </div>
        <div class="row">
          <div class="col">
            <div class="flex">
              <q-item-section avatar>
                <q-badge color="positive" class="q-py-xs q-px-md" style="padding-top: 6px;padding-bottom: 6px;" text-color="white" label="$$" />
              </q-item-section>

              <q-item-section class="text-h5 text-weight-bold">3,000</q-item-section>
            </div>
          </div>
          <div class="col-auto">
            <q-btn class="new-card" color="primary" icon="add_circle" label="New Card" />
          </div>
        </div> 
      </div><!--Header End-->

      <!--Tab-->
      <div class="q-gutter-y-md">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey q-pb-md"
          active-color="black"
          indicator-color="default"
          align="start"
          narrow-indicator
        >
          <q-tab name="debitCards" label="My debit cards"></q-tab>
          <q-tab name="companyCards" label="All company cards"></q-tab>
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="shadow-2 rounded-borders no-margin">
          <q-tab-panel name="debitCards">
            <DebitCardsTab />
          </q-tab-panel>

          <q-tab-panel name="companyCards">
            <CompanyCardsTab />
          </q-tab-panel>
        </q-tab-panels>
      </div>

    </div>
  </q-page>
</template>
<script>
import DebitCardsTab from 'components/DebitCardsTab.vue'
import CompanyCardsTab from 'components/CompanyCardsTab.vue'
export default {
  name: 'cardPage',
  components: {DebitCardsTab, CompanyCardsTab},
  data () {
    return {
      tab: 'debitCards',
    }
  }
}
</script>
