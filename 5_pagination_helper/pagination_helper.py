#!/usr/bin/env python

class PaginationHelper(object):

    def __init__(self, collection, items_per_page):
        self.collection = collection
        self.items_per_page = items_per_page

    # returns the number of items within the entire collection
    def item_count(self):
        return len(self.collection)

    # returns the number of pages
    def page_count(self):
        extras = 1 if self.item_count() % self.items_per_page > 1 else 0
        return int(self.item_count() / self.items_per_page) + extras

    # returns the number of items on the current page. page_index is zero based
    # this method should return -1 for page_index values that are out of range
    def page_item_count(self, page_index):
        if page_index > self.page_count() - 1 or page_index < 0:
            return -1
        if page_index == self.page_count() - 1:
            return self.item_count() % self.items_per_page
        else:
            return self.items_per_page


    # determines what page an item is on. Zero based indexes.
    # this method should return -1 for item_index values that are out of range
    def page_index(self, item_index):
        if item_index > self.item_count() - 1 or item_index < 0:
            return -1
        return int(item_index/self.items_per_page)

# 0 0
# 1 0
# 2 0
# 3 0
# 4 0
# 5 0
# 6 0
# 7 0
# 8 0
# 9 0
# 10 1
# 11 1
# 12 1
# 13 1
# 14 1
# 15 1
# 16 1
# 17 1
# 18 1
# 19 1
# 20 2
# 21 2
# 22 2
# 23 2

