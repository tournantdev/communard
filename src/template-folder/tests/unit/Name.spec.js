import { shallowMount } from '@vue/test-utils'

import Component from '../../src/index.vue'

describe('{componentName}', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(Component, {})
	})

})
