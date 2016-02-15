import test from 'ava'
import split from './'

test('main', t => {
	t.same(split('git commit -m "first commit"'), ['git', 'commit', '-m', '\"first commit\"'])
})
