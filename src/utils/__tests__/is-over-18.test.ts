import { describe, it, expect } from 'vitest';
import { flexibleUserFactory } from '../../helpers/user/flexible-user-factory';
import { UserBuilder } from '../../helpers/user/user-builder';
import { userFactory } from '../../helpers/user/user-factory';
import { userMother } from '../../helpers/user/user-mother';
import { isOver18 } from '../is-over-18';

describe('isOver18', () => {
    it('works with inline', () => {
        // Not ideal, partial user, so less representative of the real world usage
        const result = isOver18({ date_of_birth: '2000-01-01' });
        expect(result).toBe(true);
    });

    it('works with factory', () => {
        // better than inline object, but less flexible unless you imperatively specify properties
        const result = isOver18(userFactory());
        expect(result).toBe(true);
    });

    // This allows for overrides, but in a less controlled manner than the Builder pattern
    it('works with flexible factory', () => {
        const result = isOver18(flexibleUserFactory({ date_of_birth: '2000-01-01' }));
        expect(result).toBe(true);
    });

    it('works with builder', () => {
        // more control, with sanctioned, constrained overrides
        const user = (new UserBuilder())
            .withDateOfBirth(new Date('2000-01-01'))
            .build();

        const result = isOver18(user);
        expect(result).toBe(true);
    });

    describe('object mother', () => {
        // Pre-canned, ready to go user objects
        it('works with under aged', () => {
            const user = userMother.underAgedUser();
            const result = isOver18(user);
            expect(result).toBe(false);
        });

        it('works with over aged', () => {
            const user = userMother.overAgedUser();
            const result = isOver18(user);
            expect(result).toBe(true);
        });
    });
});
