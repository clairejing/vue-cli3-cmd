import { expect } from 'chai'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import myStore from '@/store'
import testUtil from '../test-util'
import HintMsg from '@/components/simpleSpreadsheet/HintMsg.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HintMsg.vue', () => {
  let store
  beforeEach(() => {
    store = myStore
  })

  it('renders a table when passed two numbers', () => {
    const hintMsg = 'test'
    store.state.hintMsg = hintMsg
    const wrapper = testUtil.mountComponent(HintMsg, { store, localVue })
    expect(wrapper.text()).to.include(hintMsg)
  })
})
