import { AnyConstructor, Mixin } from '../../meta';
import { SelectionAny, SelectionWithNoteMixin, SelectionWithSourceCitationMixin } from '../internal';

/**
 * @ignore
 */
export const SelectionWithNoteSourceCitationMixin = <C extends AnyConstructor<SelectionAny>>(Base: C) => SelectionWithSourceCitationMixin(SelectionWithNoteMixin(Base));

export type SelectionWithNoteSourceCitationMixin = Mixin<typeof SelectionWithNoteSourceCitationMixin>
