import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChatComposer } from '@/components/concierge/ChatComposer';

describe('ChatComposer', () => {
  it('renders the textarea', () => {
    render(<ChatComposer value="" onChange={vi.fn()} onSend={vi.fn()} />);
    expect(screen.getByRole('textbox', { name: /message input/i })).toBeInTheDocument();
  });

  it('calls onChange when typing', () => {
    const onChange = vi.fn();
    render(<ChatComposer value="" onChange={onChange} onSend={vi.fn()} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello' } });
    expect(onChange).toHaveBeenCalledWith('hello');
  });

  it('calls onSend when Enter is pressed with non-empty value', () => {
    const onSend = vi.fn();
    render(<ChatComposer value="hello" onChange={vi.fn()} onSend={onSend} />);
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', shiftKey: false });
    expect(onSend).toHaveBeenCalled();
  });

  it('does NOT call onSend on Shift+Enter', () => {
    const onSend = vi.fn();
    render(<ChatComposer value="hello" onChange={vi.fn()} onSend={onSend} />);
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', shiftKey: true });
    expect(onSend).not.toHaveBeenCalled();
  });

  it('send button is disabled when value is empty', () => {
    render(<ChatComposer value="" onChange={vi.fn()} onSend={vi.fn()} />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeDisabled();
  });

  it('send button is enabled when value is non-empty', () => {
    render(<ChatComposer value="hi" onChange={vi.fn()} onSend={vi.fn()} />);
    expect(screen.getByRole('button', { name: /send message/i })).not.toBeDisabled();
  });

  it('send button is disabled when disabled prop is true', () => {
    render(<ChatComposer value="hi" onChange={vi.fn()} onSend={vi.fn()} disabled />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeDisabled();
  });

  it('calls onSend when send button is clicked', () => {
    const onSend = vi.fn();
    render(<ChatComposer value="hello" onChange={vi.fn()} onSend={onSend} />);
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(onSend).toHaveBeenCalled();
  });
});
