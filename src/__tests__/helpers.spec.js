import { collatedTasksExist } from '../helpers';

describe('collatedTasksExist', () => {
  describe('Success', () => {
    it('returns the INBOX collated task', () => {
      expect(collatedTasksExist('INBOX')).toEqual({
        key: 'INBOX',
        name: 'Inbox',
      });
    });

    it('returns the TODAY collated task', () => {
      expect(collatedTasksExist('TODAY')).toEqual({
        key: 'TODAY',
        name: 'Today',
      });
    });

    it('returns the NEXT_7 collated task', () => {
      expect(collatedTasksExist('NEXT_7')).toEqual({
        key: 'NEXT_7',
        name: 'Next 7 Days',
      });
    });
  });

  describe('Failure', () => {
    it('returns undefined for an ordinary project id', () => {
      expect(collatedTasksExist('1')).toBeUndefined();
    });
  });
});
