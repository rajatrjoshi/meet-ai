import {createAvatar} from '@dicebear/core';
import {botttsNeutral, initials} from '@dicebear/collection';
import {cn} from '@/lib/utils';
import {Avatar, AvatarFallback,  AvatarImage} from '@/components/ui/avatar';

interface GenerateAvatarProps {
    seed: string;
    className?: string;
    variant?: 'botttsNeutral' | 'initials';
}

export const GenerateAvatar = ({seed, className, variant = 'botttsNeutral'}: GenerateAvatarProps) => {
    let avatar;

    if (variant === 'botttsNeutral') {
        avatar = createAvatar(botttsNeutral, {
            seed: seed,
        });
    }
    else{
        avatar = createAvatar(initials, {
            seed: seed,
            fontWeight: 500,
            fontSize: 42,
        });
    }


    return(
        <Avatar className={cn(className)}>
            <AvatarImage src={avatar.toDataUri()} alt="Avatar"/>
            <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    )
}