import { useState } from 'react';
import type { FormEvent } from 'react';
import { supabase } from '../supabaseClient';
import './rsvp.css';

type RsvpFormState = {
	myNameFirst: string;
	myNameLast: string;
	myEmail: string;
	myPhone: string;
	myInfo: string;
	hasGuest: boolean;
	myGuestName: string;
	isGoingToCeremony: boolean;
	IsGoingToReception: boolean;
	isDietary: boolean;
};

const initialFormState: RsvpFormState = {
	myNameFirst: '',
	myNameLast: '',
	myEmail: '',
	myPhone: '',
	myInfo: '',
	hasGuest: false,
	myGuestName: '',
	isGoingToCeremony: false,
	IsGoingToReception: false,
	isDietary: false
};

export default function Rsvp() {
	const [formState, setFormState] = useState<RsvpFormState>(initialFormState);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formError, setFormError] = useState('');
	const [formSuccess, setFormSuccess] = useState('');
	const [showDuplicateModal, setShowDuplicateModal] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormError('');
		setFormSuccess('');

		const trimmedFirst = formState.myNameFirst.trim();
		const trimmedLast = formState.myNameLast.trim();
		const trimmedEmail = formState.myEmail.trim().toLowerCase();
		const trimmedPhone = formState.myPhone.trim();
		const trimmedInfo = formState.myInfo.trim();
		const trimmedGuestName = formState.myGuestName.trim();

		if (!trimmedFirst || !trimmedLast || !trimmedEmail || !trimmedPhone || !trimmedInfo) {
			setFormError('Please fill out all required fields.');
			return;
		}

		if (formState.hasGuest && !trimmedGuestName) {
			setFormError('Please include your guest name if you are bringing one.');
			return;
		}

		setIsSubmitting(true);

		const { data: existingGuest, error: duplicateCheckError } = await supabase.from('myGuest').select('id').ilike('myEmail', trimmedEmail).limit(1);

		if (duplicateCheckError) {
			setIsSubmitting(false);
			setFormError('There was an issue checking your RSVP. Please try again.');
			return;
		}

		if (existingGuest && existingGuest.length > 0) {
			setIsSubmitting(false);
			setShowDuplicateModal(true);
			return;
		}

		const { error: insertError } = await supabase.from('myGuest').insert({
			myNameFirst: trimmedFirst,
			myNameLast: trimmedLast,
			myEmail: trimmedEmail,
			myPhone: trimmedPhone,
			myInfo: trimmedInfo,
			hasGuest: formState.hasGuest,
			myGuestName: formState.hasGuest ? trimmedGuestName : '',
			isGoingToCeremony: formState.isGoingToCeremony,
			IsGoingToReception: formState.IsGoingToReception,
			isDietary: formState.isDietary
		});

		setIsSubmitting(false);

		if (insertError) {
			setFormError('There was an issue submitting your RSVP. Please try again.');
			return;
		}

		setFormSuccess('Thanks! Your RSVP has been submitted.');
		setFormState(initialFormState);
	};

	return (
		<section className="rsvpPage">
			<div className="rsvpShell">
				<header className="rsvpHeader">
					<h1>RSVP</h1>
					<p>Please fill out the form below.</p>
				</header>

				<form className="rsvpForm" onSubmit={handleSubmit} noValidate>
					<label className="rsvpField">
						<span>First Name *</span>
						<input
							type="text"
							value={formState.myNameFirst}
							onChange={(event) => setFormState((prev) => ({ ...prev, myNameFirst: event.target.value }))}
							required
						/>
					</label>

					<label className="rsvpField">
						<span>Last Name *</span>
						<input
							type="text"
							value={formState.myNameLast}
							onChange={(event) => setFormState((prev) => ({ ...prev, myNameLast: event.target.value }))}
							required
						/>
					</label>

					<label className="rsvpField">
						<span>Email *</span>
						<input
							type="email"
							value={formState.myEmail}
							onChange={(event) => setFormState((prev) => ({ ...prev, myEmail: event.target.value }))}
							required
						/>
					</label>

					<label className="rsvpField">
						<span>Phone *</span>
						<input
							type="tel"
							value={formState.myPhone}
							onChange={(event) => setFormState((prev) => ({ ...prev, myPhone: event.target.value }))}
							required
						/>
					</label>

					<section className="rsvpSection">
						<h2 className="rsvpSectionTitle">Attending</h2>
						<p className="rsvpSectionCopy">Check all events you plan to attend.</p>
						<div className="rsvpAttendanceRow">
							<label className="rsvpCheck rsvpCheckCard">
								<input
									type="checkbox"
									checked={formState.isGoingToCeremony}
									onChange={(event) => setFormState((prev) => ({ ...prev, isGoingToCeremony: event.target.checked }))}
								/>
								<span>
									Ceremony
									<span className="rsvpCheckMeta">Sunday October 4, 2026</span>
								</span>
							</label>

							<label className="rsvpCheck rsvpCheckCard">
								<input
									type="checkbox"
									checked={formState.IsGoingToReception}
									onChange={(event) => setFormState((prev) => ({ ...prev, IsGoingToReception: event.target.checked }))}
								/>
								<span>
									Happy Hour
									<span className="rsvpCheckMeta">Saturday October 3, 2026</span>
								</span>
							</label>
						</div>
					</section>

					<label className="rsvpCheck">
						<input
							type="checkbox"
							checked={formState.hasGuest}
							onChange={(event) =>
								setFormState((prev) => ({
									...prev,
									hasGuest: event.target.checked,
									myGuestName: event.target.checked ? prev.myGuestName : ''
								}))
							}
						/>
						<span>I am bringing a guest</span>
					</label>

					{formState.hasGuest && (
						<label className="rsvpField">
							<span>Guest Name *</span>
							<input
								type="text"
								value={formState.myGuestName}
								onChange={(event) => setFormState((prev) => ({ ...prev, myGuestName: event.target.value }))}
								required={formState.hasGuest}
							/>
						</label>
					)}

					<label className="rsvpCheck">
						<input
							type="checkbox"
							checked={formState.isDietary}
							onChange={(event) => setFormState((prev) => ({ ...prev, isDietary: event.target.checked }))}
						/>
						<span>I have dietary restrictions</span>
					</label>
					<p className="rsvpNote">If checked, please add your dietary restrictions in the Additional Info box below.</p>

					<label className="rsvpField">
						<span>Additional Info *</span>
						<textarea
							rows={4}
							value={formState.myInfo}
							onChange={(event) => setFormState((prev) => ({ ...prev, myInfo: event.target.value }))}
							required
						/>
					</label>

					{formError && <p className="rsvpMessage rsvpError">{formError}</p>}
					{formSuccess && <p className="rsvpMessage rsvpSuccess">{formSuccess}</p>}

					<button className="rsvpSubmit" type="submit" disabled={isSubmitting}>
						{isSubmitting ? 'Submitting...' : 'Submit RSVP'}
					</button>
				</form>
			</div>

			{showDuplicateModal && (
				<div className="rsvpModalBackdrop" role="presentation" onClick={() => setShowDuplicateModal(false)}>
					<div className="rsvpModal" role="dialog" aria-modal="true" aria-labelledby="duplicate-title" onClick={(event) => event.stopPropagation()}>
						<h2 id="duplicate-title">RSVP Already Submitted</h2>
						<p>That email has already RSVP&apos;d. If you need to update details, please contact us directly.</p>
						<button type="button" onClick={() => setShowDuplicateModal(false)}>
							Close
						</button>
					</div>
				</div>
			)}
		</section>
	);
}
