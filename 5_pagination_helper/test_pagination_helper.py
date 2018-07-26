import unittest
import pagination_helper


class TestPaginationHelper(unittest.TestCase):

    def test(self):

        collection = range(1,25)
        helper = pagination_helper.PaginationHelper(collection, 10)

        self.assertEqual(helper.page_count(), 3, 'page_count is returning incorrect value.')
        self.assertEqual(helper.page_index(23), 2, 'page_index returned incorrect value')
        self.assertEqual(helper.item_count(), 24, 'item_count returned incorrect value')


if __name__ == '__main__':
    unittest.main()